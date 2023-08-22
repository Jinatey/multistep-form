import React from "react";

export default function home() {
  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1  className=" text-lg font-bold">Personal info</h1>
        <p>Please provide your name, email adress and phone number.</p>
      </div>

      <form className=" grid gap-6">
          <label className="grid " >Name
          <input className=" p-1 rounded-md border-2 border-slate-550" type="text"/>
          </label >
          <label className="grid">Email adress
          <input  className=" p-1 rounded-md border-2 border-slate-550" type="text"/>
          </label>
          <label className="grid" >Phone Number
          <input  className=" p-1 rounded-md border-2 border-slate-550" type="number"/>
          </label>
         
      </form>

      <div className=" flex justify-end mt-20">
          <button className=" bg-blue-950 text-white p-3 px-5 rounded-md">
            Next Step
          </button>
        </div>

    </div>
  );
}
