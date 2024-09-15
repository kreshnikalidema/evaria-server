import { FindManyOptions } from 'typeorm';

export interface PaginationParams<T> extends FindManyOptions<T> {
  page?: number;
  limit?: number;
}

export interface PaginationMeta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface PaginationResponse<T> {
  items: T[];
  meta: PaginationMeta;
}
