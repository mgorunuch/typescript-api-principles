export interface MyResponse<A> {
  responseBody: A,
  code: number,
  headers: [],
}

export interface ApiServiceProviderInterface {
  get<R>(url: string): Promise<MyResponse<R>>;
  post<D, R>(url: string, data: D): Promise<MyResponse<R>>;
  path<D, R>(url: string, data: D): Promise<MyResponse<R>>;
  put<D, R>(url: string, data: D): Promise<MyResponse<R>>;
}
