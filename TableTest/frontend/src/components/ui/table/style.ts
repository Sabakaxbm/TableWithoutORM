import styled from 'styled-components';

export const TableContainer = styled.div`
  min-height: 500px;
  max-height: 500px;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
`;
export const TableRow = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
`;

export const TableRowHeaders = styled(TableRow)`
  position: absolute;
  width: 100%;
`;
export const TableBody = styled(TableRow)`
  padding-top: 45px;
`;

export const TableCells = styled.div`
  padding: 10px;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #56433d;
  border-left: 2px solid #56433d;
  border-bottom: 2px solid #56433d;
  border-right: 2px solid #56433d;
`;
export const TableHeaders = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  background: #56433d;
  color: #f9c941;
  align-items: center;
  justify-content: center;
`;
