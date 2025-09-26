import React from "react";

const Table = ({ children, className, ...props }) => {
  return (
    <table className={className} {...props}>
      {children}
    </table>
  );
};
const TableHead = ({ children, className, ...props }) => {
  return (
    <thead className={className} {...props}>
      {children}
    </thead>
  );
};
const TableBody = ({ children, className, ...props }) => {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
};
const TableRow = ({ children, className, ...props }) => {
  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  );
};
const TableData = ({ children, className, ...props }) => {
  return (
    <td className={className} {...props}>
      {children}
    </td>
  );
};
export { Table, TableHead, TableBody, TableRow, TableData };
