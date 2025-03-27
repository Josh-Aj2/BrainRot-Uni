import React from "react";

function Pagination({ currPage, setCurrPage, hasNextPage }) {
  return (
    <div>
      <button
        onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
        disabled={currPage === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => setCurrPage((prev) => prev + 1)}
        disabled={!hasNextPage}
      >
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
