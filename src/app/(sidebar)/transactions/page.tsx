import React from "react";
import Table from "@/Components/ui/Table";
// import data from "@/mock/data";

const page = () => {
  return (
    <div className="px-[40px] py-40 w-full">
      <div className="flex justify-between">
        <h1 className="title">Recent Transactions</h1>
        <button className="button w-40 h-12">Add Transaction</button>
      </div>
      <Table />
    </div>
  );
};

export default page;
