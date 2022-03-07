import React from "react";
import TableHeadings from "./TableHeadings";
import TableBody from "./TableBody";

const Table = ({ headings, tableData, rows, cssClass }) => {
  return (
    <table className={`table ${cssClass}`}>
      <TableHeadings headings={headings} />
      <TableBody tableData={tableData} rows={rows} />
    </table>
  );
};

export default Table;
