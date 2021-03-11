import { IItem } from './item.model';

export interface IEvent {
  available: number,
  returned: number,
  collectionURI: string,
  items: Array<IItem>
}
