import React, { useContext } from 'react'
import CompanyContext from '../Context/CompanyContext'

const Pagenation = () => {
    const {currentPage,
        totalPages,
        goToNextPage,
        goToPrevPage,
        setCurrentPage,
    } = useContext(CompanyContext);
    // Generate pages numbers dynamically 
    const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 mt-8'>
        <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className='px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50'>
            Prev
        </button>
        <span className='text-white'>Page {currentPage} of {totalPages}</span>
       <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className='px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50'>
            Next
        </button>
    </div>
  )
}

export default Pagenation
