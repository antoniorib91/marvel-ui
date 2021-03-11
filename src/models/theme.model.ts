import { IThemeFont } from './theme-font.model';

export interface ITheme {
  colors: Record<string, string>,
  font: IThemeFont,
}
