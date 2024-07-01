"use client";
import React, { useState } from "react";
import { data } from "@/mock/data";
const Table = () => {
  const heads = ["Items", "Shop Name", "Date", "Payment Method", "Amount"];
  const [amount, setAmount] = useState(10);
  return (
    <div className="flex flex-col justify-center items-center mt-20 box">
      <table className="w-full font-grotesk   h-auto table-auto">
        <thead className="">
          <tr className="text-center ">
            {heads.map((head, index) => (
              <th
                key={head}
                className={`h-[72px]  ${index === 0 && "text-left"}`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mx-10">
          {data.map(
            (item) =>
              item.id <= amount && (
                <tr
                  key={item.id}
                  className="h-[72px]  text-center border-t-[1px] border-black-6 text-black-4"
                >
                  <td className="text-left font-semibold text-black-2">
                    {item.title}
                  </td>
                  <td>{item.shop_name}</td>
                  <td>{item.date}</td>
                  <td>{item.method}</td>
                  <td>{item.ammount}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <button
        onClick={() => setAmount(amount + 10)}
        className="w-[192px] h-[48px] my-16 button"
      >
        Load More
      </button>
    </div>
  );
};

export default Table;
