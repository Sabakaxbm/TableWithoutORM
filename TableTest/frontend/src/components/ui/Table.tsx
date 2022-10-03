import React from 'react';
import styled from 'styled-components';

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
}

const Table: React.FC<TableProps> = ({ info, tableHeaders }) => {
  return (
    <TableContainer>
      <TableRow>
        {tableHeaders.map((el, index) => (
          <TableHeaders key={index.toString() + el}>
            <div>{el}</div>{' '}
          </TableHeaders>
        ))}
      </TableRow>

      {info.length > 0 ? (
        info.map((el) => (
          <TableRow key={el.id}>
            <TableCells>{el.date}</TableCells>
            <TableCells>{el.name}</TableCells>
            <TableCells>{el.amount}</TableCells>
            <TableCells>{el.distance}</TableCells>
          </TableRow>
        ))
      ) : (
        <div>Данные не найдены</div>
      )}
    </TableContainer>
  );
};

export default Table;
