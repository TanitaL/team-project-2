import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Pagination, PaginationItem } from '@mui/material';

const PaginationNews = ({ currentPage, totalPages, handlePaginationChange }) => {

    const handleChange = (event, value) => {
      handlePaginationChange(value)
    };

  return <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"}}><Pagination
    page={currentPage}
    onChange={handleChange}
    count={totalPages || 99}
    color="primary"
    renderItem={(item) => (
        <PaginationItem
            components={{ 
                previous: KeyboardArrowLeftIcon, 
                next: KeyboardArrowRightIcon 
            }}
            {...item}
        />
    )}
/></div>
};

export default PaginationNews;
