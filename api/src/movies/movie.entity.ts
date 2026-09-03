import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';

//import { MovieCast } from './movie-cast.entity';

@Entity('movies')
@Index('movies_year_idx', ['releaseYear'])

export class Movie {

  @PrimaryGeneratedColumn()

  id!: number;

  @Column({

    type: 'uuid',

    default: () => 'gen_random_uuid()',

    unique: true,

  })

  uuid!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  language!: string | null;

  @Column({ type: 'text'})

  title!: string;

  @Column({ type: 'integer', name: 'release_year' })

  releaseYear!: number;

  @Column({ type: 'integer', name: 'runtime_minutes', nullable: true })

  runtimeMinutes!: number | null;

  @Column({ type: 'text', nullable: true })

  overview!: string | null;

  @Column({ type: 'text', name: 'poster_url', nullable: true })

  posterUrl!: string | null;

  @Column({ type: 'text', name: 'trailer_url', nullable: true })

  trailerUrl!: string | null;

  //@OneToMany(() => MovieCast, (movieCast) => movieCast.movie)

  //cast!: MovieCast[];

}