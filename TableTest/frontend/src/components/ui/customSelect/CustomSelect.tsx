import React from 'react';
import * as S from './style';

interface CustomSelectProps {
  options: string[];
  defaultValue: string;
  value: string;
  onChange: (sort: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <S.Select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value={''}>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </S.Select>
  );
};

export default CustomSelect;
