import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className="page-item"
            // onClick={() => setCurrentPage(pageNumber)}
          >
            <Link
              onClick={() => setCurrentPage(pageNumber)}
              to="#"
              //   href="!#"
              className="page-link"
            >
              {pageNumber}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
