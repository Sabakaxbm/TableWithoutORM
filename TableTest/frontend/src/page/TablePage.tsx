import React, { useEffect, useState } from 'react';
import Table from '../components/ui/table/Table';
import { Distance } from '../models/models';
import { getRequest } from '../http/getTableInfo';
import { functionSort, getPageForPagination } from '../service/utils';
import Pagination from '../components/ui/pagination/Pagination';
import * as C from '../components/style';
import CustomInput from '../components/ui/customInput/CustomInput';

interface TablePageProps {
  selectedSortType: string;
  selectedField: string;
}

const TablePage: React.FC<TablePageProps> = ({
  selectedField,
  selectedSortType,
}) => {
  const [distanceInfo, setDistanceInfo] = useState<Distance[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const tableHeaders = ['date', 'name', 'amount', 'distance'];
  const [page, setPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const pages = getPageForPagination(page);

  useEffect(() => {
    if (selectedSortType !== '' && selectedField !== '') {
      const type = functionSort[selectedSortType];
      if (type !== null) {
        type(selectedField, distanceInfo, setDistanceInfo);
      }
    }
  }, [selectedSortType, selectedField]);

  const getDistanceInfo = async (page): Promise<void> => {
    const response = await getRequest(page);
    if (response?.data != null) {
      setPage(response?.countPages);
      setDistanceInfo(response.data);
    }
  };

  useEffect(() => {
    void getDistanceInfo(activePage);
  }, []);

  useEffect(() => {
    void getDistanceInfo(activePage);
  }, [activePage]);
  return (
    <C.Container>
      {selectedSortType === 'По записи' && (
        <C.InputItem>
          <CustomInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeHolder={'Введите параметры'}
          />
        </C.InputItem>
      )}
      <Table
        selectedField={selectedField}
        info={distanceInfo}
        tableHeaders={tableHeaders}
        selectedSortType={selectedSortType}
        searchQuery={searchQuery}
      />
      <Pagination
        activePage={activePage}
        pages={pages}
        setPage={setActivePage}
      />
    </C.Container>
  );
};

export default TablePage;
