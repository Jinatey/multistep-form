import React from "react";

const summury = () => {
  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-xl font-bold">Finishing up</h1>
        <p>Double-check everything looks OK</p>
      </div>

      <div className=" bg-slate-200  px-6 py-2 rounded-md ">
        <div className="flex justify-between py-6 border-b-2 border-slate-300">
          <div>
            <p>Arcade yearly</p>
            <p>change</p>
          </div>

          <div>59</div>
        </div>
        <div className=" flex justify-between py-6">
          <div>
            <p>Online service</p>
            <p>Large storage</p>
          </div>

          <div>
            <p>33</p>
            <p>33</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default summury;
