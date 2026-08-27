import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { MoviesService } from './movies.service';
import { GetMoviesQueryDto } from './dtos/get-movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
  ) {}

  @Get()
  findAll(@Query() query: GetMoviesQueryDto) {
    return this.moviesService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.moviesService.findOne(id);
  }
}