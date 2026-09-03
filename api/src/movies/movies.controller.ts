import {
  Controller,
  Get,
  Param,
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

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.moviesService.findOne(uuid);
  }
}
