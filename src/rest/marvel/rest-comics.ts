import { AxiosResponse } from 'axios';
import HttpClient from '../http-client';
import { IResponse } from '../../models/response.model';
import Pagination from '../../services/pagination.service';

class RestComics {
  private static key = process.env.REAC_APP_PUBLIC_API_KEY;

  public static getComics(): Promise<AxiosResponse<IResponse>> {
    const url = `/marvel/v1/public/comics${Pagination.getPaginationParams()}&orderBy=focDate&apiKey=${this.key}`;
    return HttpClient.get<IResponse>(url);
  }

  public static getComicsEnvDev(): Promise<AxiosResponse<IResponse>> {
    const url = `/marvel/v1/public/comics${Pagination.getPaginationParams()}&orderBy=focDate`;
    return HttpClient.get<IResponse>(url);
  }
}

export default RestComics;
