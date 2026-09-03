import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { GetMoviesQueryDto } from './dtos/get-movies.dto';
import { MoviesResponse } from './types/movie-response';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(
    query: GetMoviesQueryDto,
  ): Promise<MoviesResponse> {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 8;

    const sortOrder: 'ASC' | 'DESC' = query.order
      ? (query.order.toUpperCase() as 'ASC' | 'DESC')
      : 'DESC';

    const skip = (page - 1) * limit;

    const queryBuilder = this.movieRepository
      .createQueryBuilder('movie')
      .leftJoin(
        'reviews',
        'review',
        'review.movie_id = movie.id',
      )
      .select([
        'movie.id AS id',
        'movie.uuid AS uuid',
        'movie.title AS title',
        'movie.release_year AS "releaseYear"',
        'movie.poster_url AS "posterUrl"',
        'COALESCE(ROUND(AVG(review.rating)::numeric, 1), 0.0) AS rating',
      ])
      .groupBy('movie.id')
      .orderBy('"releaseYear"', sortOrder)
      .addOrderBy('movie.id', 'DESC');

    const total = await this.movieRepository.count();

    const rawData = await queryBuilder
      .offset(skip)
      .limit(limit)
      .getRawMany();

    const data = rawData.map((item) => ({
      ...item,
      rating: parseFloat(item.rating),
    }));

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(uuid: string): Promise<Movie> {
    const movie = await this.movieRepository.findOne({
      where: { uuid },
    });

    if (!movie) {
      throw new NotFoundException(
        `Movie with uuid ${uuid} not found`,
      );
    }

    return movie;
  }
}