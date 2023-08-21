import React from "react";

export default function home() {
  return (
    <div className=" mx-auto w-[500px]">
      <div>
        <h1  className=" text-lg font-bold">Personal info</h1>
        <p>Please provide your name, email adress and phone number.</p>
      </div>

      <form className=" grid gap-6">
          <label className="grid " >Name
          <input type="text"/>
          </label >
          <label className="grid">Name
          <input type="text"/>
          </label>
          <label className="grid" >Phone Number
          <input type="number"/>
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
