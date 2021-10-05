import React from 'react'
import './css/Pagination.css';

const Pagination = ({ picsPerPage, totalPictures, paginate, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPictures / picsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <nav>
      {
        pageNumber.map(number => (
          <div key={number} data-testid='btn' className='btn'>
            <button onClick={() => paginate(number)} href='!#'
              className={`paginationItem ${currentPage === number ? 'active' : null}`}>{number}</button>
          </div>
        ))
      }
    </nav>
  )
}

export default Pagination;