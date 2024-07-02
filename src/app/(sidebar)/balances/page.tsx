import React from "react";
import { balances } from "@/mock/data";
const Balances = () => {
  return (
    <div className="px-[40px] py-40 w-full relative">
      <h1 className="title">Balances</h1>
      <div className="flex flex-wrap gap-8">
        {balances.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col  items-center py-5 box w-[415px] h-[300px] justify-between mt-20 gap-5"
            >
              <div className="flex justify-between w-full items-center h-[54px] border-2-black-4 border-b">
                <span className="text-black-4 font-semibold text-lg">
                  {item.title}
                </span>
                <span className="text-black-3 font-medium text-sm">
                  {item.type}
                </span>
              </div>
              <div className="flex flex-col w-full font-mono gap-3">
                <span className="text-2xl">
                  {item.card_number.slice(0, 12) +
                    "*".repeat(item.card_number.length - 13)}
                </span>
                <span className="text-sm text-black-4">Account Number</span>
                <span className="text-2xl">{item.amount}</span>
                <span className="text-sm text-black-4">Total amount</span>
              </div>
              <div className="flex justify-between w-full h-[60px] items-center">
                <button className="bg-white text-green-1 w-[110px] h-[40px] text-left">
                  Remove
                </button>
                <button className="button w-[110px] h-[40px]">Details </button>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col  items-center py-5 box w-[415px] h-[300px] justify-center mt-5">
          <button className="button w-[208px] h-[50px]">Add Accounts </button>
          <button className="bg-white text-green-1 w-[208px] h-[50px] ">
            Edit Accounts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Balances;
