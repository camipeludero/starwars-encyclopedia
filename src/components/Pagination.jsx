import React from "react";

const Pagination = ({ page = 1, handleChangePage }) => {
  return (
    <div>
      <button onClick={() => handleChangePage(-1)}>prev</button>
      <p>{page}</p>
      <button onClick={() => handleChangePage(1)}>next</button>
    </div>
  );
};

export default Pagination;
