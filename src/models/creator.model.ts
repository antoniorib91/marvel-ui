import { IItem } from './item.model';

export interface ICreator {
  available: number,
  returned: number,
  collectionURI: string,
  items: Array<IItem>
}
