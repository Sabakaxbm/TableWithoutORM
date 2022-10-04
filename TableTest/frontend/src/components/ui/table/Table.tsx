import React, { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import CustomInput from '../customInput/CustomInput';
import { Distance } from '../../../models/models';

interface TableProps {
  info: Distance[];
  tableHeaders: string[];
  selectedField: string;
  selectedSortType: string;
}

const Table: React.FC<TableProps> = ({
  info,
  tableHeaders,
  selectedField,
  selectedSortType,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
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
      <S.TableRow>
        {tableHeaders.map((el, index) => (
          <S.TableHeaders key={index.toString() + el}>
            <div>{el}</div>
          </S.TableHeaders>
        ))}
      </S.TableRow>
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
      {selectedSortType === 'По записи' && (
        <CustomInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeHolder={'123'}
        />
      )}
    </S.TableContainer>
  );
};

export default Table;
