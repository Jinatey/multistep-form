import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";

const plans = [
  { name: "arcade", price: "9", priceY: "90", image: "arcade.svg" },
  { name: "advanced", price: "12", priceY: "120", image: "advanced.svg" },
  { name: "pro", price: "15", priceY: "150", image: "pro.svg" },
];

export default function plan() {
  // const [enabled, setEnabled] = useState(false);

  const router = useRouter();
  console.log("touer", router);

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-lg font-bold">Select your plan</h1>
        <p className="pb-5">
          {" "}
          you have the option of monthly or yearly billinng
        </p>

        <div className=" grid grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              className={`border rounded cursor-pointer border-slate-400  p-5${
                router.query.option === plan.name
                  ? " border-2 border-blue-900"
                  : ""
              }`}
              onClick={() => {
                router.push({ query: { ...router.query, option: plan.name } });
              }}
            >
              <img src={plan.image} alt="" />
              <div className="pt-5">
                <h1>{plan.name}</h1>

                <p>
                  {router.query.duration === "yearly"?plan.priceY:plan.price}
                </p>
                
                  {router.query.duration === "yearly"&&<p>2 months free</p>}
                
              </div>
            </div>
          ))}
        </div>

        {/* </div> */}

        {/* <div className="grid grid-cols-3 gap-4">
        <div
          className={`border rounded cursor-pointer border-slate-400  p-5${
            router.query.option === "arcade" ? " border-2 border-blue-900" : ""
          }`}
          onClick={() => {
            // router.query.option = "arcade";
            router.push({ query: { ...router.query, option: "arcade" } });
          }}
        >
          <div className=" py-3">
            <img src="/arcade.svg" alt="" />
          </div>
          <div className=" py-5">
            <p>Arcade</p>
            <p className=" text-slate-500"> $9/mo</p>
          </div>
        </div> */}

        {/* <div
          className={` border rounded cursor-pointer  border-slate-400 p-5 ${
            router.query.option === "advanced"
              ? " border-2 border-blue-900 "
              : ""
          } `}
          onClick={() => {
            router.push({ query: {...router.query,
              option: "advanced" } });
          }}
        >
          <div className=" py-3">
            <img src="/advanced.svg" alt="" />
          </div>
          <div className=" py-5">
            <p>Advanced</p>
            <p className=" text-slate-500">$12/mo</p>
          </div>
        </div> */}
        {/* <div
          className={` border rounded  cursor-pointer border-slate-400 p-5 ${
            router.query.option === "pro" ? " border-2 border-blue-900 " : ""
          } `}
          onClick={() => {
            router.push({
              query: {
                ...router.query,
                option: "pro",
              },
            });
          }}
        >
          <div className=" py-3">
            <img src="/pro.svg" alt="" />
          </div>
          <div className=" py-5">
            <p>Pro</p>
            <p className=" text-slate-500">$15/mo</p>
          </div>
        </div> */}

        <div className=" flex justify-between pt-10">
          <p>Monthly</p>

          <Switch
            checked={router.query.duration === "yearly"}
            onChange={(isChecked) => {
              if (isChecked) {
                router.push({
                  query: {
                    ...router.query,
                    duration: "yearly",
                  },
                });
              } else {
                router.push({
                  query: {
                    ...router.query,
                    duration: "monthly",
                  },
                });
              }
            }}
            className={`${
              router.query.duration === "yearly" ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                router.query.duration === "yearly"
                  ? "translate-x-6"
                  : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>

          <p>Yearly</p>
        </div>
      </div>

      <div className=" flex justify-between mt-20">
        <button>Go Back</button>
        <button className=" bg-blue-950 text-white p-3 px-5 rounded-md">
          Next Step
        </button>
      </div>
    </div>
  );
}
