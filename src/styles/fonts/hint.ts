import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IDefaultStyledProps } from '../../models/default-styled-props.model';

export const HintRegular = ({ theme }: IDefaultStyledProps): FlattenSimpleInterpolation => css`
font-family: ${theme.font.family};
font-size: ${theme.font.sizes.hint};
font-weight: ${theme.font.weights.regular};
`;

export const HintBold = ({ theme }: IDefaultStyledProps): FlattenSimpleInterpolation => css`
font-family: ${theme.font.family};
font-size: ${theme.font.sizes.hint};
font-weight: ${theme.font.weights.fw700};
`;
