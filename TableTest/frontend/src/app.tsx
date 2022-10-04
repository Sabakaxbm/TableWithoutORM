import React, { useState } from 'react';
import './styles.scss';
import FilterComponent from './components/ui/filterOptions/FilterComponent';
import TablePage from './page/TablePage';

const App: React.FC = () => {
  const [selectedField, setSelectedField] = useState<string>('');
  const [selectedSortType, setSelectedSortType] = useState<string>('');
  const typeSortHeaders = ['По возрастанию', 'По убыванию', 'По записи'];

  const sortField = (sort: string): void => {
    setSelectedField(sort);
  };
  const setSortType = (sort: string): void => {
    setSelectedSortType(sort);
  };

  const fieldsHeaders = ['name', 'amount', 'distance'];
  const filtersProps = {
    selectedField,
    sortField,
    fieldsHeaders,
    selectedSortType,
    setSortType,
    typeSortHeaders,
  };
  return (
    <div>
      <FilterComponent props={filtersProps} />
      <TablePage
        selectedSortType={selectedSortType}
        selectedField={selectedField}
      />
    </div>
  );
};

export default App;
