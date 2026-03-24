declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type PaginatedData<T> = {
  currentPage: number;
  totalPages: number;
  totalExercises?: number;
  [key: string]: T;
};

declare type ErrorResponse = {
  error: string;
};

declare type ApiResponse<T> = SuccessfulResponse<T> | ErrorResponse;
