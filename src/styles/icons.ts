import styled from 'styled-components';
import { ReactComponent as SearchSVG } from '../assets/svgs/search.svg';
import { ReactComponent as EyeSVG } from '../assets/svgs/eye.svg';

export const SearchIcon = styled(SearchSVG)`
  path {
    fill: ${({ theme }) => theme.colors.mainColorContrast};
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;

export const EyeIcon = styled(EyeSVG)`
  path {
    fill: ${({ theme }) => theme.colors.textColorDisabled};
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.mainColorContrast};
    }
  }
`;
