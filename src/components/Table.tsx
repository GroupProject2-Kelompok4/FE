import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

interface TableProps {
  rows: any[];
  columns: Record<string, string>;
  loading: boolean;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
  handleDetails?: (id: number) => void;
  editModal?: string;
}

const Table: React.FC<TableProps> = ({
  rows,
  columns,
  loading,
  handleEdit,
  handleDelete,
  handleDetails,
  editModal,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table className="w-full drop-shadow">
        <thead>
          <tr>
            {/* Gets headers from column */}
            {Object.keys(columns).map((key) => {
              return (
                <th
                  key={key}
                  className="bg-@primary border-@primary text-white"
                >
                  {columns[key]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Gets body from column and row */}
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                {Object.keys(columns).map((key) => {
                  if (columns[key] === "Edit") {
                    return (
                      <td key={key} className="text-accent border-@primary/50">
                        <button
                          className="text-@F47522 hover:text-@primary"
                          onClick={() => handleEdit && handleEdit(row.id)}
                        >
                          <label className="cursor-pointer" htmlFor={editModal}>
                            <MdModeEdit size={25} />
                          </label>
                        </button>
                      </td>
                    );
                  }
                  if (columns[key] === "Delete") {
                    return (
                      <td key={key} className="text-accent border-@primary/50">
                        <button
                          className="text-@F47522 hover:text-@primary"
                          onClick={() => handleDelete && handleDelete(row.id)}
                        >
                          <MdDeleteForever size={25} />
                        </button>
                      </td>
                    );
                  }
                  if (columns[key] === "Details") {
                    return (
                      <td key={key} className="text-accent border-@primary/50">
                        <button
                          className="text-@primary hover:text-@F47522 cursor-pointer"
                          onClick={() => handleDetails && handleDetails(row.id)}
                        >
                          <IoEllipsisHorizontalSharp size={25} />
                        </button>
                      </td>
                    );
                  }
                  return (
                    <td className="text-@primary border-@primary/50" key={key}>
                      {row[key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
