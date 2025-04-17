import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const handlePageClick = () => {};

  return (
    <div className='mt-7'>
    <ReactPaginate
      previousLabel={"السابق"}
      nextLabel={"التالي"}
      breakLabel={"..."}
      pageCount={10}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="flex flex-wrap justify-center items-center gap-2 mt-4"
      pageClassName="border border-gray-300 text-[9px] sm:text-sm px-2 sm:px-3 py-1 rounded hover:bg-gray-100 transition-all duration-200"
      pageLinkClassName="text-[10px] sm:text-sm"
      activeClassName="bg-gray-950 text-white"
      previousClassName="cursor-pointer border border-gray-300 text-[11px] sm:text-sm px-2 sm:px-3 py-1 rounded hover:bg-gray-100 transition-all duration-200"
      nextClassName="cursor-pointer border border-gray-300 text-[11px] sm:text-sm px-2 sm:px-3 py-1 rounded hover:bg-gray-100 transition-all duration-200"
      breakClassName="text-xs sm:text-sm px-2 sm:px-3 py-1"
      disabledClassName="opacity-50 pointer-events-none"
      />
      </div>
  )
}

export default Pagination;