"use client";
import React, { useState } from "react";
import GoalMOdal from "@/Components/ui/GoalsModal";
import LoanModal from "@/Components/ui/LoanModa";
import TableLoan from "@/Components/ui/TableLoan";

const Loan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cancel = () => {
    setIsOpen(false);
  };
  const onOk = () => {
    setIsOpen(false);
  };
  return (
    <div className="px-[40px] py-40 w-full relative">
      <LoanModal open={isOpen} cancel={cancel} onOk={onOk} />
      <div className="flex justify-between">
        <h1 className="title">Loan</h1>
        <button className="button w-40 h-12" onClick={() => setIsOpen(true)}>
          Add Loan
        </button>{" "}
      </div>{" "}
      <TableLoan />
    </div>
  );
};

export default Loan;
