import { useSnapshot } from "valtio";

import { addons, plans } from "@/data";
import { state } from "@/state";

const summury = () => {
  const snap = useSnapshot(state);

  console.log();

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-xl font-bold">Finishing up</h1>
        <p>Double-check everything looks OK</p>
      </div>

      <div className=" bg-slate-200  px-6 py-2 rounded-md ">
        <div className="flex justify-between py-6 border-b-2 border-slate-300">
          <div>
            <p>{plans[snap.planIndex]?.name} </p>
            <p>change</p>
          </div>

          <div>59</div>
        </div>
        <div>
          {addons.map((addon, idx) => {
            if (snap.addons[idx]) {
              return (
                <div className=" flex justify-between  py-6">
                  <div>
                    <p>{addon.title}</p>
                  </div>

                  <div>
                    <p>
                      {snap.duration === "yearly" ? addon.priceY : addon.price}
                    </p>
                  </div>
                  <p>Total per month {}</p>

                </div>
              );
            }
          })}
          {/* <p>{snap.addons[0] === true ? "arcade" : ""} </p>
            <p>{snap.addons[1] === true ? "arcade" : ""} </p>
            <p>{snap.addons[2] === true ? "arcade" : ""} </p> */}
        </div>
      </div>
    </div>
  );
};

export default summury;
