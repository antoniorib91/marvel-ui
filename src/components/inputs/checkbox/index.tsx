import React, { ChangeEvent, FunctionComponent } from 'react';
import S from './styles';

interface IProps {
  id: string,
  className?: string,
  checked?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const defaultProps = {
  className: '',
  checked: false,
  onChange: () => {},
};

const Checkbox: FunctionComponent<IProps> = (props: IProps) => {
  const {
    id, checked, onChange, className,
  } = props;

  return (
    <S.Container
      className={className}
    >
      <S.Wrapper>
        <S.Label
          htmlFor={id}
          checked={checked}
        >
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
        </S.Label>
      </S.Wrapper>
    </S.Container>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
