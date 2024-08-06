import React, { useState } from "react";
import { Button, Modal, DatePicker, Select } from "antd";
import { Input } from "@/Components/ui/input";
import Category from "./SelectCustom";
const GoalMOdal = ({
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
          <Input placeholder="Description" required />
          <DatePicker className="border-2-green-2 h-10 text-black-3" required />

          <button className="w-full h-12 button" type="submit" onClick={onOk}>
            Add Goal
          </button>
        </form>
      </Modal>
    </>
  );
};

export default GoalMOdal;
