import React, {
  ChangeEvent, FocusEvent, FunctionComponent, KeyboardEvent, useState,
} from 'react';
import { CSSProperties } from 'styled-components';
import S from './styles';

type IProps = {
  className?: string,
  type?: string,
  name?: string,
  value?: string,
  label?: string,
  placeholder?: string,
  id?: string,
  disabled?: boolean,
  error?: boolean,
  readOnly?: boolean,
  message?: string,
  dataTestId?: string,
  maxLength?: number,
  style?: CSSProperties,
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void,
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
};

const defaultProps = {
  className: '',
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: '',
  id: '',
  message: '',
  disabled: false,
  error: false,
  readOnly: false,
  dataTestId: '',
  maxLength: undefined,
  style: undefined,
  onBlur: () => {},
  onChange: () => {},
  onKeyUp: () => {},
  onKeyDown: () => {},
};

const Input: FunctionComponent<IProps> = (props: IProps) => {
  const {
    type, id, name, label, placeholder,
    value, disabled, error, className,
    message, readOnly, maxLength, dataTestId,
    style,
    onChange, onBlur, onKeyUp, onKeyDown,
  } = props;

  const [isTyping, setIsTyping] = useState(false);

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    event.persist();
    setIsTyping(true);
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleOnKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    event.persist();
    setTimeout(() => {
      setIsTyping(false);
    }, 200);
    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  return (
    <S.Wrapper
      error={error ? error.toString() : 'false'}
    >
      <S.Input
        className={className}
        id={id}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        error={error ? error.toString() : 'false'}
        maxLength={maxLength}
        style={style}
        pattern=".+"
        required
        formNoValidate
        data-testid={dataTestId}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        autoComplete="off"
        hasLabel={label !== '' ? 'true' : 'false'}
        typing={isTyping ? isTyping.toString() : 'false'}
      />
      <S.Label
        htmlFor={id}
        display={label !== '' ? 'true' : 'false'}
      >
        { label }
      </S.Label>
      <S.Message
        error={error ? error.toString() : 'false'}
      >
        {message}
      </S.Message>
    </S.Wrapper>
  );
};

Input.defaultProps = defaultProps;

export default Input;
