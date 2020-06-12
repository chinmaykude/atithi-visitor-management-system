import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, currentPage, pageSize, onPageChange }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="text-center">
      <ul
        className="pagination justify-content-center"
        style={{ position: "relative", overflowX: "scroll" }}
      >
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
