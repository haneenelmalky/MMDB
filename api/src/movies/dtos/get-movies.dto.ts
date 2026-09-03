import { IsOptional, IsInt, Min, IsEnum } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
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

  @IsOptional()
  @IsEnum(SortOrder)
  @Transform(({ value }) => value?.toUpperCase())
  order?: SortOrder = SortOrder.DESC;
}