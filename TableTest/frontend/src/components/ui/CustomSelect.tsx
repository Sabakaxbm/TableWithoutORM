import React from 'react';

interface CustomSelectProps {
  options: string[];
  defaultValue: any;
  value: any;
  onChange: any;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value={''}>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
