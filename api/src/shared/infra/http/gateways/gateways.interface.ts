export interface MakeRequestHttp<
  THeaders extends Record<string, string | string[]>
> {
  baseURL: string;
  headers?: THeaders;
}
