import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${window.location.origin}/api`,
      withCredentials: true,
    });
  }

  /**
   * GET request
   * @param url Endpoint. Can omit "/api" prefix
   * @param config Axios configuration
   */
  public get = <R = void>(url: string, config?: AxiosRequestConfig) =>
    this.execute<R>("GET", url, null, config);

  /**
   * PUT request
   * @param url Endpoint. Can omit "/api" prefix
   * @param data json payload
   * @param config Axios configuration
   */
  public put = <R = void>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => this.execute<R>("PUT", url, data, config);

  /**
   * POST request
   * @param url Endpoint. Can omit "/api" prefix
   * @param data json payload
   * @param config Axios configuration
   */
  public post = <R = void>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => this.execute<R>("POST", url, data, config);

  /**
   * DELETE request
   * @param url Endpoint. Can omit "/api" prefix
   * @param data payload to send with delete request
   * @param config Axios configuration
   */
  public delete = <R = void>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => this.execute<R>("DELETE", url, data, config);

  private execute = <R>(
    method: "GET" | "PUT" | "POST" | "DELETE",
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> => {
    switch (method) {
      case "GET":
        return this.client.get(url, config);
      case "PUT":
        return this.client.put(url, data, config);
      case "POST":
        return this.client.post(url, data, config);
      case "DELETE":
        if (data) {
          config = { ...config, data };
        }
        return this.client.delete(url, config);
    }
  };
}

/**
 * Api client instance. The base url is the origin, thus the server application
 * must be in the origin as the web app. For operations, (i.e. get, put ...),
 * the url is already appended with "/api". Thus you just need to put in
 * the remaining pathname.
 */
const api = new ApiClient();

export default api;
