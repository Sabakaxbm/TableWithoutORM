import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';

const TableContainer = styled.div`
  max-width: 1000px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  padding: 5px;
`;
const TableRow = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
`;
const TableCells = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #56433d;
  border-bottom: 2px solid #56433d;
  border-right: 2px solid #56433d;
`;
const TableHeaders = styled.div`
  padding: 10px;
  background: #56433d;
  color: #f9c941;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Distance {
  id: any;
  name: any;
  date: any;
  amount: number;
  distance: number;
}

interface TableProps {
  info: Distance[];
  tableHeaders: string[];
  setDistanceInfo: any;
}

const testObj = [{ id: 1 }, { id: 2 }, { id: 3 }];
const Table: React.FC<TableProps> = ({
  info,
  tableHeaders,
  setDistanceInfo,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [selectedSortType, setSelectedSortType] = useState<string>('');

  const typeSort = ['По возрастанию', 'По убыванию'];
  const sortByBig = (sort): void => {
    setDistanceInfo([...info].sort((a, b) => a[sort] - b[sort]));
  };
  const sortBySmall = (sort): void => {
    setDistanceInfo([...info].sort((a, b) => b[sort] - a[sort]));
  };
  const functionSort = {
    'По возрастанию': sortByBig,
    'По убыванию': sortBySmall,
  };
  const sortDistance = (sort): void => {
    setSelectedSort(sort);
  };
  const setSortType = (sort): void => {
    setSelectedSortType(sort);
  };

  useEffect(() => {
    if (selectedSortType !== '' && selectedSort !== '') {
      const type = functionSort[selectedSortType];
      type(selectedSort);
    }
  }, [selectedSortType, selectedSort]);

  return (
    <TableContainer>
      <CustomSelect
        value={selectedSort}
        onChange={sortDistance}
        options={tableHeaders}
        defaultValue={'Сортировка по'}
      />
      <CustomSelect
        value={selectedSortType}
        onChange={setSortType}
        options={typeSort}
        defaultValue={'Сортировка по'}
      />
      <TableRow>
        {tableHeaders.map((el, index) => (
          <TableHeaders key={index.toString() + el}>
            <div>{el}</div>{' '}
          </TableHeaders>
        ))}
      </TableRow>
      {info.map((el) => (
        <TableRow key={el.id}>
          <TableCells>{el.date}</TableCells>
          <TableCells>{el.name}</TableCells>
          <TableCells>{el.amount}</TableCells>
          <TableCells>{el.distance}</TableCells>
        </TableRow>
      ))}
    </TableContainer>
  );
};

export default Table;
