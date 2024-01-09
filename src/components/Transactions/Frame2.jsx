import React from "react";
import TableTopBar from "./TableTopBar";
import DataTable from "./DataTable";
import Pagination from "./Pagination";

const Frame2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-inter text-black text-[20px] font-medium">
        Transactions | This Month
      </div>
      <div className="p-3">
        <div>
          <TableTopBar />
        </div>
        <div>
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <DataTable />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
