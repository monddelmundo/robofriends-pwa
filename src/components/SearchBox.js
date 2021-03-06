import React from "react";

const SearchBox = ({ searchChange }) => {
  //pa = padding, ba = border all sides, b = border, bg = background
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default React.memo(SearchBox);
