import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ pageNumber, setPageNumber, totalPages }) => {
  const nextPage = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  const previousPage = () => {
    if (pageNumber === 1) return;
    setPageNumber((pageNumber) => pageNumber - 1);
  };

  const pageNumbers = () => {
    let totalPagesArray = [];
    for (let i = 1; i <= 42; i++) {
      totalPagesArray.push(i);
    }
    console.log(totalPagesArray);
    return totalPagesArray;
  };

  const setCurrentPage = (currentPage) => {
    setPageNumber((pageNumber) => (pageNumber = currentPage));
  };

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-5"
      pageCount={totalPages}
      previousLabel="Previous"
      previousClassName={`${pageNumber === 1 ? "disabled" : ""} page-item `}
      previousLinkClassName="btn btn-primary page-link"
      nextLabel="Next"
      nextClassName={`${pageNumber === 42 ? "disabled" : ""} page-item`}
      nextLinkClassName="btn btn-primary page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => setPageNumber(data.selected + 1)}
      activeClassName="active"
    />
  );
};

export default Paginate;
