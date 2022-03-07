import React from "react";

const TableHeadings = ({ headings }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => (
          <th scope="col" key={heading}>
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadings;
