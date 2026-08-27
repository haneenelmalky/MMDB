import { IsOptional, IsInt, Min, IsString, IsIn } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class GetMoviesQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 8;
  
  readonly sortBy: string = 'releaseYear';

  @IsOptional()
  @IsString()
  @IsIn(['ASC', 'DESC', 'asc', 'desc'])
  @Transform(({ value }) => value?.toUpperCase())
  order?: 'ASC' | 'DESC' = 'DESC'; 
}