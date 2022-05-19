import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ pageNumber, setPageNumber, totalPages }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <React.Fragment>
      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-5"
        pageCount={parseInt(totalPages)}
        pageRangeDisplayed={width < 550 ? 2 : 3}
        marginPagesDisplayed={width < 550 ? 2 : 3}
        previousLabel="Previous"
        previousClassName={`${
          pageNumber === 1 ? "disabled" : ""
        } page-item prev`}
        previousLinkClassName="btn btn-primary page-link"
        nextLabel="Next"
        nextClassName={`${pageNumber === 42 ? "disabled" : ""} page-item next`}
        nextLinkClassName="btn btn-primary page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        activeClassName="active"
      />
    </React.Fragment>
  );
};

export default Paginate;
