import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

import { Pagination, PaginationItem } from '@mui/material';

const PaginationNews = ({ currentPage, pages, handlePaginationChange }) => {

    const [page, setPage] = useState(currentPage);
    const handleChange = (event, value) => {
      setPage(value);
      //handlePaginationChange(value)
    };

  return <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"}}><Pagination
    page={page}
    onChange={handleChange}
    count={pages}
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
