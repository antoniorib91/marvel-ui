import { ITextObjects } from './text-objects.model';
import { IUrl } from './url.model';
import { ISeries } from './series.model';
import { IVariant } from './variant.model';
import { ICollection } from './collection.model';
import { ICollectedIssue } from './collected-issue.model';
import { IDate } from './date.model';
import { IPrice } from './price.model';
import { IThumbnail } from './thumbnail.model';
import { IImage } from './image.model';
import { ICreator } from './creator.model';
import { ICharacter } from './character.model';
import { IStory } from './story.model';
import { IEvent } from './event.model';

export interface IComic {
  id: number,
  digitalId: number,
  title: string,
  issueNumber: number,
  variantDescription: string,
  description: string,
  modified: Date,
  isbn: string,
  upc: string,
  diamondCode: string,
  ean: string,
  issn: string,
  format: string,
  pageCount: number,
  textObjects: ITextObjects,
  resourceURI: string,
  urls: Array<IUrl>,
  series: ISeries,
  variants: Array<IVariant>,
  collections: Array<ICollection>,
  collectedIssues: Array<ICollectedIssue>,
  dates: Array<IDate>,
  prices: Array<IPrice>,
  thumbnail: IThumbnail,
  images: Array<IImage>
  creators: ICreator
  characters: ICharacter,
  stories: IStory,
  events: IEvent
}
