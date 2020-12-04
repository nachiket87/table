import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columns, data: data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, key) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={key}>
            {headerGroup.headers.map((column, key) => (
              <th {...column.getHeaderProps} key={key}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, i) => {
                return (
                  <td {...cell.getCellProps()} key={i}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup, i) => {
          return (
            <tr {...footerGroup.getFooterGroupProps()} key={i}>
              {footerGroup.headers.map((column, key) => {
                return (
                  <td {...column.getFooterProps} key={key}>
                    {column.render("Footer")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    </table>
  );
};
