import { PaginationParams, PaginationResponse } from './pagination.interfaces';

export class Pagination {
  static getOptions<T>(params: PaginationParams<T>): PaginationParams<T> {
    let { page = 1, limit = 10, ...where } = params;

    page = Number(page);
    limit = Number(limit);

    const skip = (page - 1) * limit;

    // @ts-ignore
    return { where, skip, take: limit };
  }

  static getResponse<T>(
    rows: T[],
    count: number,
    options: PaginationParams<T>,
  ): PaginationResponse<T> {
    const { skip, take } = options;

    const page = Math.floor(skip / take) + 1;

    const totalPages = Math.ceil(count / take);

    return {
      items: rows,
      meta: {
        itemCount: rows.length,
        totalItems: count,
        itemsPerPage: take,
        totalPages,
        currentPage: page,
      },
    };
  }
}
