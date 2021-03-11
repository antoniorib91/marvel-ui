import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IDefaultStyledProps } from '../../models/default-styled-props.model';

const ParagraphRegular = ({ theme }: IDefaultStyledProps): FlattenSimpleInterpolation => css`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.paragraph};
  font-weight: ${theme.font.weights.regular};
`;

export default ParagraphRegular;
