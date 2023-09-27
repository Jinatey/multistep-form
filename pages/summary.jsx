import { useSnapshot } from "valtio";
import { useRouter } from "next/router";

import { addons, plans } from "@/data";
import { state } from "@/state";

const summary = () => {
  const snap = useSnapshot(state);
  const router = useRouter();

  const selectedPlan = plans[snap.planIndex];
  const selectedPlanPrice =
    snap.duration === "yearly" ? selectedPlan?.priceY : selectedPlan?.price;

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

      <div className=" bg-slate-100  px-6 py-2 rounded-md ">
        <div className="flex justify-between py-6 border-b-2 border-slate-300">
          <div>
            <p className=" font-bold text-blue-950">{selectedPlan?.name} </p>
            <button 
              className=" text-slate-500 hover:text-purple-600 hover:underline"
              onClick={() => {
                router.push("/plan");
              }}
            >
              change
            </button>
          </div>

          <div className=" font-bold text-blue-950">{selectedPlanPrice}</div>
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
                  ? `$${addon.priceY}/yr`
                  : `$${addon.price}/mo`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div className=" flex justify-between">
            <p>Total per month </p>
            <p>{selectedPlanPrice + totalAddonPrice}</p>
          </div>
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
              router.push("/form-complete");
            }}
            className=" bg-violet-800 hover:bg-violet-600 text-white p-3 px-5 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default summary;
