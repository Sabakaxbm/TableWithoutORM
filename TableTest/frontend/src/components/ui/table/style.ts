import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 1000px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  padding: 5px;
`;
export const TableRow = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
`;
export const TableCells = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #56433d;
  border-bottom: 2px solid #56433d;
  border-right: 2px solid #56433d;
`;
export const TableHeaders = styled.div`
  padding: 10px;
  background: #56433d;
  color: #f9c941;
  display: flex;
  align-items: center;
  justify-content: center;
`;
