import { IData } from './data.model';

export interface IResponse {
  code: number,
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  etag: string,
  data: IData,
}
