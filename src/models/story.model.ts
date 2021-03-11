import { IItem } from './item.model';

export interface IStory {
  available: number,
  returned: number,
  collectionURI: string,
  items: Array<IItem>
}
