"use client";
import React, { useState } from "react";
import Table from "@/Components/ui/Table";
import TransactionModal from "@/Components/ui/TransactionModal";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cancel = () => {
    setIsOpen(false);
  };
  const onOk = () => {
    setIsOpen(false);
    // Add transaction logic here
  };
  return (
    <div className="px-[40px] py-40 w-full relative">
      <TransactionModal open={isOpen} cancel={cancel} onOk={onOk} />
      <div className="flex justify-between">
        <h1 className="title">Recent Transactions</h1>
        <button className="button w-40 h-12" onClick={() => setIsOpen(true)}>
          Add Transaction
        </button>
      </div>
      <Table />
    </div>
  );
};

export default page;
