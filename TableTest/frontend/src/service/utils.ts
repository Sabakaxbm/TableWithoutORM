import { Distance } from '../models/models';
import React from 'react';

export const getPageForPagination = (page: number): number[] => {
  const arr: number[] = [];
  for (let i = 1; page >= i; i++) {
    arr.push(i);
  }
  return arr;
};

const ascendingSort = (
  sort: string,
  data: Distance[],
  setInfo: React.Dispatch<React.SetStateAction<any>>
): void => {
  if (sort === 'name') {
    setInfo([...data].sort((a, b) => a[sort].localeCompare(b[sort])));
    return;
  }
  setInfo([...data].sort((a, b) => a[sort] - b[sort]));
};

const descendingSort = (
  sort: string,
  data: Distance[],
  setInfo: React.Dispatch<React.SetStateAction<any>>
): void => {
  if (sort === 'name') {
    setInfo([...data].sort((a, b) => a[sort].localeCompare(b[sort])).reverse());
    return;
  }
  setInfo([...data].sort((a, b) => b[sort] - a[sort]));
};

export const functionSort = {
  'По возрастанию': ascendingSort,
  'По убыванию': descendingSort,
  'По записи': null,
};
