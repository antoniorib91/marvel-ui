import { ITheme } from '../models/theme.model';

const Theme: ITheme = {
  colors: {
    mainColor: '#EC1D24',
    mainColorBackground: '#202020',
    mainColorContrast: '#FFFFFF',
    statusColorProblem: '#e62429',
    statusColorAlert: '#FF9500',
    textColor: '#1C1C1C',
    textColorDisabled: '#E5E5E5',
    textColorContrast: '#FFFFFF',
  },
  font: {
    family: "'Roboto', sans-serif;",
    sizes: {
      hint: '10px',
      paragraph: '16px',
      cta: '14px',
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
};

export default Theme;
