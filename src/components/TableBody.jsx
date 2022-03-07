import React from "react";

const TableBody = ({ tableData, rows }) => {
  const makeTableBodyMarkup = (tableData) => {
    return (
      tableData &&
      tableData.map((tableElementObj, index) => {
        return (
          <tr key={`${tableElementObj}-${index}`}>
            {rows.map((row, index) => (
              <td key={`${tableElementObj[row]}-${index}`}>
                {tableElementObj[row]}
              </td>
            ))}
          </tr>
        );
      })
    );
  };

  return <tbody>{makeTableBodyMarkup(tableData)}</tbody>;
};

export default TableBody;

//      {tableData.map((tableElementObj) => {
//        return (
//           <tr>
//             {rows.map((row) => <td>{tableElementObj[row]}</td>)}
//           </tr>
//        );
//      })}
