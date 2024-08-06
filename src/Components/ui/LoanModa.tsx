import React, { useState } from "react";
import { Modal, DatePicker, Select } from "antd";
import { Input } from "@/Components/ui/input";
const LoanModal = ({
  open,
  cancel,
  onOk,
}: {
  open: boolean;
  cancel: any;
  onOk: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [loanType, setLoanType] = useState("lending");
  return (
    <>
      <Modal
        open={open}
        title="Title"
        onOk={onOk}
        onCancel={cancel}
        footer={[]}
        className="z-0"
      >
        <form className="flex flex-col gap-5">
          <Select
            className="h-10 w-full"
            optionFilterProp="label"
            onChange={(e) => setLoanType(e)}
            defaultValue={"lending"}
            options={[
              {
                value: "lending",
                label: "Lending",
              },
              {
                value: "borrowing",
                label: "Borrowing",
              },
            ]}
          />
          <Input
            placeholder={` ${
              loanType === "lending" ? "Borrower`s" : "Lender`s"
            } name`}
            required
          />

          <Input
            placeholder={` ${
              loanType === "lending" ? "Borrower`s" : "Lender`s"
            } phonenumber`}
            required
            type="number"
          />
          <DatePicker
            className="border-2-green-2 h-10 text-black-3"
            required
            placeholder={` ${
              loanType === "lending" ? "Borrowing" : "Lending"
            } date`}
          />
          <DatePicker
            className="border-2-green-2 h-10 text-black-3"
            required
            placeholder="Due date"
          />

          <button className="w-full h-12 button" type="submit" onClick={onOk}>
            Add Goal
          </button>
        </form>
      </Modal>
    </>
  );
};

export default LoanModal;
