import React from "react";

const addons = () => {
  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6 ">
        <h1 className=" text-lg font-bold">Pick add-ons</h1>
        <p>add-ons helps your gaming experience</p>
      </div>

      <div class>
        <div className="  flex justify-between p-4 px-6 items-center border border-black rounded-md  ">
          <div className=" flex gap-5">
            <input type="checkbox" />
            <div>
              <p className=" text-blue-950">Online services</p>
              <p className=" text-slate-500">Acess to multipla games</p>
            </div>
          </div>

          <p className=" text-blue-400">+$1/m</p>
        </div>
        <div className=" my-6 flex justify-between p-4 px-6 items-center border border-black rounded-md  ">
          <div className=" flex gap-5">
            <input type="checkbox" />
            <div>
              <p className=" text-blue-950">Online services</p>
              <p className=" text-slate-500">Acess to multipla games</p>
            </div>
          </div>

          <p className=" text-blue-400">+$1/m</p>
        </div>
        <div className="  flex justify-between p-4 px-6 items-center border border-black rounded-md  ">
          <div className=" flex gap-5">
            <input type="checkbox" />
            <div>
              <p className=" text-blue-950">Online services</p>
              <p className=" text-slate-500">Acess to multipla games</p>
            </div>
          </div>

          <p className=" text-blue-400">+$1/m</p>
        </div>

<div className=" flex justify-between mt-20">
  <button>Go Back</button>
  <button className=" bg-blue-950 text-white p-3 px-5 rounded-md">Next Step</button>
</div>

      </div>
    </div>
  );
};

export default addons;
