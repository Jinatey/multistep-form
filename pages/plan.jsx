import React from "react";

export default function plan() {
  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-lg font-bold">Select your plan</h1>
        <p> you have the option of monthly or yearly billinng</p>
      </div>

      <div className=" grid grid-cols-3 gap-4">
        <div className=" border rounded border-slate-400  p-5">
          <div className=" py-3">
            <img src="/arcade.svg" alt="" />
          </div>
          <div className=" py-5">
            <p>Arcade</p>
            <p className=" text-slate-500"> $9/mo</p>
          </div>
        </div>
        <div className=" border rounded  border-slate-400 p-5 ">
          <div className=" py-3">
            <img src="/advanced.svg" alt="" />
          </div>
          <div className=" py-5">
            <p>Advanced</p>
            <p className=" text-slate-500">$12/mo</p>
          </div>
        </div>
        <div className=" border rounded  border-slate-400 p-5 ">
          <div className=" py-3">
            <img src="/pro.svg" alt="" />
          </div>
          <div className=" py-5">
            <p>Pro</p>
            <p className=" text-slate-500">$15/mo</p>
          </div>
        </div>
        
      </div>

      <div className=" flex justify-between mt-20">
          <button>Go Back</button>
          <button className=" bg-blue-950 text-white p-3 px-5 rounded-md">
            Next Step
          </button>
        </div>
    </div>
  );
}
