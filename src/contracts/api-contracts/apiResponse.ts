export interface DataResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface PaginationResponse<T> {
  total: number;
  first_item: number;
  last_item: number;
  last_page: number;
  current_page: number;
  next_page_url: string | null;
  per_page: number;
  has_more_page: boolean;
  previous_page_url: string | null;
  data: T[];
}
