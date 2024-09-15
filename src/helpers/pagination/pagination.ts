import { PaginationParams, PaginationResponse } from './pagination.interfaces';

export class Pagination {
  static getOptions<T>(params: PaginationParams<T>): PaginationParams<T> {
    const { page = 1, limit = 10, ...options } = params;

    const skip = (page - 1) * limit;

    return { ...options, skip, limit };
  }

  static getResponse<T>(
    rows: T[],
    count: number,
    options: PaginationParams<T>,
  ): PaginationResponse<T> {
    const { skip, limit } = options;

    const page = Math.floor(skip / limit) + 1;

    const totalPages = Math.ceil(count / limit);

    return {
      items: rows,
      meta: {
        itemCount: rows.length,
        totalItems: count,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
    };
  }
}
