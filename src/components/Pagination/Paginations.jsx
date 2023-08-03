import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';
import { Pagination, PaginationItem } from '@mui/material';
import css from './Paginations.module.css';

const Paginations = ({ currentPage, totalPages, handlePaginationChange }) => {
  const handleChange = (_, value) => {
    handlePaginationChange(value);
  };

  console.log('currentPage-->', currentPage);
  console.log('totalPages-->', totalPages);

  return (
    <div className={css.pagContainer}>
      {totalPages !== 0 && (
        <Pagination
          page={currentPage}
          onChange={handleChange}
          // count={99}
          // defaultPage={1}
          // boundaryCount={0}
          // siblingCount={1}
          count={totalPages >= 99 ? 99 : totalPages}
          variant="outlined"
          size="large"
          sx={{
            'Button.MuiPaginationItem-circular.Mui-selected': {
              bgcolor: '#54ADFF',
              color: '#fff',
              border: '1px solid #54ADFF',
            },
            button: {
              color: '#111111',
              backgroundColor: '#fff',
              border: '1px solid #54ADFF',
            },
          }}
          renderItem={item => (
            <PaginationItem
              components={{
                previous: LiaLongArrowAltLeftSolid,
                next: LiaLongArrowAltRightSolid,
              }}
              {...item}
            />
          )}
        />
      )}
    </div>
  );
};

export default Paginations;
