import { IComic } from './comic.model';

export interface IData {
  offset: number,
  limit: number,
  total: number,
  count: number,
  results: Array<IComic>
}
