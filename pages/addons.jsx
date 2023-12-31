import React from "react";
import { useRouter } from "next/router";
import { state } from "@/state";
import { useSnapshot } from "valtio";
import { addons } from "@/data";

export default function Addons() {
  const router = useRouter();

  const snap = useSnapshot(state);

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6 ">
        <h1 className=" text-lg font-bold">Pick add-ons</h1>
        <p>add-ons helps your gaming experience</p>
      </div>

      <div className="grid gap-5 cursor-pointer">
        {addons.map((addon, idx) => (
          <div
            onClick={() => {
              if (state.addons[idx]) {
                state.addons[idx] = false;
              } else {
                state.addons[idx] = true;
              }
            }}
            key={addon.title}
            className={`flex justify-between p-4   px-6 items-center border  hover:border-blue-500 border-black rounded-md${snap.addons[idx]?' border-2 border-blue-500':''}`}    
          >
            <div className="flex items-center gap-5">
              <input
                checked={snap.addons[idx]}
                className=" h-5 w-5"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    state.addons[idx] = true;
                  } else {
                    state.addons[idx] = false;
                  }
                }}
              />
              <div>
                <p className=" font-semibold text-blue-950"> {addon.title} </p>
                <p className=" text-slate-500"> {addon.feature} </p>
              </div>
            </div>

            <div>
              <p className=" text-blue-700">
                {snap.duration === "yearly"
                  ? `$${addon.priceY}/yr`
                  : `$${addon.price}/mo`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="  flex justify-between mt-20">
        <button
          className=" text-blue-950 hover:font-bold"
          onClick={() => {
            router.push("/plan");
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            router.push("/summary");
          }}
          className=" bg-blue-950 hover:bg-blue-700 text-white p-3 px-5 rounded-md"
        >
          Next Step
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
