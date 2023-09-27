import { useSnapshot } from "valtio";
import { useRouter } from "next/router";

import { addons, plans } from "@/data";
import { state } from "@/state";

const summury = () => {
  const snap = useSnapshot(state);
  const router = useRouter();

  const selectedPlan = plans[snap.planIndex];
  const selectedPlanPrice = snap.duration === "yearly"
  ? selectedPlan?.priceY
  : selectedPlan?.price;

  // const totalAddonPrice = addons.reduce((acc, curr, idx) => {
  //   if (snap.addons[idx]) {
  //     return acc + curr.price;
  //   }

  //   return acc;
  // }, 0);

  let totalAddonPrice = 0;

  addons.map((addon, idx) => {
    if (snap.addons[idx]) {
      totalAddonPrice +=
        snap.duration === "yearly" ? addon.priceY : addon.price;
    }
  });

  console.log({ totalAddonPrice });

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-xl font-bold">Finishing up</h1>
        <p>Double-check everything looks OK</p>
      </div>

      <div className=" bg-slate-200  px-6 py-2 rounded-md ">
        <div className="flex justify-between py-6 border-b-2 border-slate-300">
          <div>
            <p>{selectedPlan?.name} </p>
            <button className=" hover:text-purple-600 hover:underline"
              onClick={() => {
                router.push("/plan");
              }}
            >
              change
            </button>
          </div>

          <div>
            {selectedPlanPrice}
          </div>
        </div>
        <div>
          {addons.map((addon, idx) => {
            if (snap.addons[idx]) {
              return (
                <div key={addon.title}>
                  <div className=" flex justify-between  py-6">
                    <div>
                      <p>{addon.title}</p>
                    </div>

                    <div>
                      <p>
                        {snap.duration === "yearly"
                          ? addon.priceY
                          : addon.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
<div className=" flex justify-between">
<p>Total per month </p>
<p>{selectedPlanPrice+ totalAddonPrice}</p>
</div>

          {/* <p>{snap.addons[0] === true ? "arcade" : ""} </p>
            <p>{snap.addons[1] === true ? "arcade" : ""} </p>
            <p>{snap.addons[2] === true ? "arcade" : ""} </p> */}
        </div>
      </div>
    </div>
  );
};

export default summury;
