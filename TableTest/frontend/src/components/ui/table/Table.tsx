import React, { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { Distance } from '../../../models/models';

interface TableProps {
  info: Distance[];
  tableHeaders: string[];
  selectedField: string;
  selectedSortType: string;
  searchQuery: string;
}

const Table: React.FC<TableProps> = ({
  info,
  tableHeaders,
  selectedField,
  searchQuery,
}) => {
  const [sortedDistance, setSortedDistance] = useState<Distance[]>([]);

  const getSortedDistance = useMemo(() => {
    if (selectedField !== '') {
      return sortedDistance.filter((el) =>
        el[selectedField].toString().includes(searchQuery)
      );
    }
    return sortedDistance;
  }, [searchQuery, sortedDistance]);

  useEffect(() => {
    setSortedDistance([...info]);
  }, [info, selectedField]);

  return (
    <S.TableContainer>
      <S.TableRowHeaders>
        {tableHeaders.map((el, index) => (
          <S.TableHeaders key={index.toString() + el}>
            <div>{el}</div>
          </S.TableHeaders>
        ))}
      </S.TableRowHeaders>
      <S.TableBody></S.TableBody>
      {getSortedDistance.length > 0 ? (
        getSortedDistance.map((el) => (
          <S.TableRow key={el.id}>
            <S.TableCells>{el.date}</S.TableCells>
            <S.TableCells>{el.name}</S.TableCells>
            <S.TableCells>{el.amount}</S.TableCells>
            <S.TableCells>{el.distance}</S.TableCells>
          </S.TableRow>
        ))
      ) : (
        <div>Данные не найдены</div>
      )}
    </S.TableContainer>
  );
};

export default Table;
