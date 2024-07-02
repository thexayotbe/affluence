import PieChart from "@/Components/ui/Piechart";
import { savings } from "@/mock/data";
import { Progress } from "antd";
import React from "react";

const Goals = () => {
  return (
    <div className="px-[40px] py-40 w-full relative">
      <h1 className="title">Goals</h1>
      <div className="flex gap-10">
        <div className="box w-[420px] h-[292px] flex flex-col justify-between">
          <h1 className="w-full h-[40px] text-black-4 font-semibold text-lg border-b border-2-black-2">
            Saving Goal
          </h1>
          <div className="flex gap-8 flex-col">
            <div className="flex justify-between w-full">
              <div>
                <p className="text-black-4 font-medium text-sm block">
                  Target Achieved
                </p>
                <h3 className="text-2xl">$12,500</h3>
              </div>
              <div>
                <p className="text-black-4 font-medium text-sm block">
                  This month target
                </p>
                <h3 className="text-2xl">$20,000</h3>
              </div>
            </div>
            <div>
              <Progress
                percent={100}
                strokeColor={"#299D91"}
                success={{ strokeColor: "#4DAF6E" }}
              />
            </div>
          </div>
          <div className="flex justify-center w-full h-[60px] items-center">
            <button className="button w-[142px] h-[40px]">Adjust Goal </button>
          </div>
        </div>
        <div className="w-full h-[292px] box">
          <h1 className="w-full h-[40px] text-black-4 font-semibold text-lg border-b border-2-black-2 mb-5">
            Saving Summary
          </h1>
          <PieChart />
        </div>
      </div>
      <h1 className="title my-10">Expenses Goals by Category</h1>
      <div className="flex flex-wrap gap-5">
        {savings.map((value) => {
          return (
            <div
              key={value.id}
              className="flex gap-5 w-[352px] h-[104px] bg-[#F7F9FC] box flex-nowrap justify-between items-center"
            >
              <div className=" flex flex-col items-start">
                <h3 className="text-sm text-black-4 font-semibold">
                  {value.title}
                </h3>
                <p className="text-black-1 text-xl mt-2">{value.amount}</p>
              </div>
              <button className="button w-[99px] h-[36px]">Adjust</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
