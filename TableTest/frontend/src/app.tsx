import React, { useEffect, useState } from 'react';
import './styles.scss';
import Table from './components/ui/Table';
import { getRequest } from './http/getTableInfo';

const App: React.FC = () => {
  const [distanceInfo, setDistanceInfo] = useState<any[]>([]);
  const getDistanceInfo = async (): Promise<void> => {
    setDistanceInfo(await getRequest());
  };
  useEffect(() => {
    void getDistanceInfo();
  }, []);
  const tableHeaders = ['date', 'name', 'amount', 'distance'];

  return (
    <div>
      <Table
        info={distanceInfo}
        tableHeaders={tableHeaders}
        setDistanceInfo={setDistanceInfo}
      />
    </div>
  );
};

export default App;
