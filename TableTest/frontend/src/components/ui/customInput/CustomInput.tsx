import React from 'react';
import * as S from './style';

interface CustomInputProps {
  value?: string;
  onChange?: (e) => void;
  placeHolder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeHolder,
}) => {
  return (
    <S.CustomInput
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
    ></S.CustomInput>
  );
};

export default CustomInput;
