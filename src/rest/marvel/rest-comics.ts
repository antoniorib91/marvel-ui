import { AxiosResponse } from 'axios';
import HttpClient from '../http-client';
import { IResponse } from '../../models/response.model';
import Pagination from '../../services/pagination.service';

class RestComics {
  private static key = process.env.REACT_APP_PUBLIC_KEY;

  public static getComics(): Promise<AxiosResponse<IResponse>> {
    const url = `/v1/public/comics${Pagination.getPaginationParams()}&orderBy=focDate&apikey=${this.key}`;
    // const url = `/marvel/v1/public/comics${Pagination.getPaginationParams()}&orderBy=focDate`;
    return HttpClient.get<IResponse>(url);
  }
}

export default RestComics;
