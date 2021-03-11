import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IDefaultStyledProps } from '../../models/default-styled-props.model';

const CtaRegular = ({ theme }: IDefaultStyledProps): FlattenSimpleInterpolation => css`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.cta};
  font-weight: ${theme.font.weights.regular};
`;

export default CtaRegular;
