import React from 'react';
import * as S from './style';

interface PaginationProps {
  pages: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  activePage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pages,
  setPage,
  activePage,
}) => {
  return (
    <S.Container>
      {pages.map((el) => (
        <S.Button
          isActive={activePage === el}
          onClick={() => setPage(el)}
          key={el}
        >
          {el}
        </S.Button>
      ))}
    </S.Container>
  );
};

export default Pagination;
