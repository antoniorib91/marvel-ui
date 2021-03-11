import { IItem } from './item.model';

export interface ICharacter {
  available: number,
  returned: number,
  collectionURI: string,
  items: Array<IItem>
}
