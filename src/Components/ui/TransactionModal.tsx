import React, { useState } from "react";
import { Button, Modal, DatePicker } from "antd";
import { Input } from "@/Components/ui/input";
const TransactionModal = ({
  open,
  cancel,
  onOk,
}: {
  open: boolean;
  cancel: any;
  onOk: any;
}) => {
  const [loading, setLoading] = useState(false);

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
          <Input placeholder="Title" required />
          <Input placeholder="Shop Name" required />
          <DatePicker className="border-2-green-2 h-10 text-black-3" required />
          <Input placeholder="Payment Method" required />
          <Input placeholder="Amount" type="number" required />
          <button className="w-full h-12 button" type="submit" onClick={onOk}>
            Add Transaction
          </button>
        </form>
      </Modal>
    </>
  );
};

export default TransactionModal;
