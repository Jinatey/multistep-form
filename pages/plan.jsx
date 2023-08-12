import React from "react";

export default function plan() {
  return (
    <div
      className=" mx-auto max-w-[45
      0px]"
    >
      <div className=" my-6">
        <h1>Select your plan</h1>
        <p> you have the option of monthly or yearly billinng</p>
      </div>

      <div className=" grid grid-cols-3 gap-4">
        <div className=" border-2 rounded border-black  p-2">
          <div>img</div>
          <div>
            <p>Arcade</p>
            <p>$9/mo</p>
          </div>
        </div>
        <div className=" border-2 rounded border-black p-2 ">
          <div>img</div>
          <div>
            <p>Advanced</p>
            <p>$12/mo</p>
          </div>
        </div>
        <div className=" border-2 rounded border-black p-2 ">
          <div>img</div>
          <div>
            <p>Pro</p>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
