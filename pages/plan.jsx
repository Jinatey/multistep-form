import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";

import { state } from "@/state";
import { useSnapshot } from "valtio";
import { plans } from "@/data";

export default function Plan() {
  // const [enabled, setEnabled] = useState(false);

  const router = useRouter();

  const snap = useSnapshot(state);
  

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-lg font-bold">Select your plan</h1>
        <p className="pb-5">
          {" "}
          you have the option of monthly or yearly billinng
        </p>

        <div className=" grid grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`border rounded cursor-pointer border-slate-400  p-5${
                snap.planIndex === idx ? " border-2 border-blue-950 " : ""
              }`}
              onClick={() => {
                // router.push({ query: { ...router.query, option: plan.name } });
                state.planIndex = idx;
              }}
            >
              <img src={plan.image} alt="" />
              <div className="pt-5">
                <h1 className=" font-bold text-blue-950">{plan.name}</h1>

                <p className=" text-slate-500">{snap.duration === "yearly" ? `$${plan.priceY}/yr` : `$${plan.price}/mo`}</p>

                {snap.duration === "yearly" && <p className=" text-blue-950">2 months free</p>}
              </div>
            </div>
          ))}
        </div>

        <div className=" flex justify-center gap-4 p-5 rounded-md mt-10 bg-slate-200">
          <p className={`font-bold ${snap.duration=== 'monthly'? ' text-blue-950':'text-slate-500'}`}>Monthly</p>

          <Switch
            checked={snap.duration === "yearly"}
            onChange={(isChecked) => {
              if (isChecked) {
                state.duration = "yearly";
              } else {
                state.duration = "monthly";
              }
            }}
            className={`${
              snap.duration === "yearly" ? "bg-blue-800" : "bg-blue-700"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                snap.duration === "yearly" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>

          <p className={`font-bold ${snap.duration=== 'yearly'? ' text-blue-950':'text-slate-500'}`}>Yearly</p>
        </div>
      </div>

      <div className=" flex justify-between mt-20">
        <button className=" text-blue-950 hover:font-bold"
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back
        </button>
        <button
          onClick={async () => {
            if (["Arcade", "Pro", "Advanced"].includes(plans[snap.planIndex]?.name)) {
              await router.push("/addons");
            } else {
              alert("please  select a plan");
            }
          }}
          className=" bg-blue-950 hover:bg-blue-700 text-white p-3 px-5 rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
