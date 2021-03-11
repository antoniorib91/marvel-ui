import React, { MouseEvent, ReactNode, FunctionComponent } from 'react';
import S from './styles';

type IProps = {
  id?: string,
  className?: string,
  dataTestId?: string,
  disabled?: boolean,
  children: ReactNode,
  type: 'button' | 'submit' | 'reset',
  secondary?: boolean,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
};

const defaultProps = {
  id: '',
  className: '',
  secondary: false,
  disabled: false,
  dataTestId: '',
  onClick: () => {},
};

const Button: FunctionComponent<IProps> = (props: IProps) => {
  const {
    id, children, type, onClick,
    dataTestId, className, secondary,
    disabled,
  } = props;

  return (
    <S.Button
      id={id}
      className={className}
      type={type}
      secondary={secondary}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestId}
    >
      { children }
    </S.Button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
