import axios, { AxiosInstance, AxiosResponse } from 'axios';

const defaultURL = process.env.REACT_APP_API;
class HttpClient {
  private static axios: AxiosInstance = axios.create({ baseURL: defaultURL });

  public static get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(url);
  }
}

export default HttpClient;
