import React from "react";

export default function home() {
  return (
    <div className=" max-w-[45
    0px]">
      <div>
        <h1>Personal info</h1>
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
    </div>
  );
}
