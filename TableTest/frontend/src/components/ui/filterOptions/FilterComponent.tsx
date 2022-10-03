import React from 'react';
import * as S from './style';
import CustomSelect from '../CustomSelect';

interface FilterProps {
  props: {
    selectedField: any;
    sortField: any;
    fieldsHeaders: any;
    selectedSortType: any;
    setSortType: any;
    typeSortHeaders: any;
  };
}

const FilterComponent: React.FC<FilterProps> = ({ props }) => {
  const {
    selectedField,
    sortField,
    fieldsHeaders,
    selectedSortType,
    setSortType,
    typeSortHeaders,
  } = props;
  return (
    <S.Container>
      <CustomSelect
        value={selectedField}
        onChange={sortField}
        options={fieldsHeaders}
        defaultValue={'Сортировка по'}
      />
      <CustomSelect
        value={selectedSortType}
        onChange={setSortType}
        options={typeSortHeaders}
        defaultValue={'Сортировка по'}
      />
    </S.Container>
  );
};

export default FilterComponent;
