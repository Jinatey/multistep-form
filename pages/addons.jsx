import React from "react";
import { useRouter } from "next/router";

const addons = [
  {
    title: "Online Service",
    feature: "Access multiple games",
    price: "1$/mo",
    priceY: "10$/y",
    slug: "online_service",
  },
  {
    title: "Larger Storage",
    feature: "Get 1TB of cloude save",
    price: "2$/mo",
    priceY: "20$/y",
    slug: "larger_storage",
  },
  {
    title: "Customizeble profile",
    feature: "Customize theme on your profile",
    price: "3$/mo",
    priceY: "30$/y",
    slug: "customizable_profile",
  },
];

export default function Addons() {
  const router = useRouter();

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6 ">
        <h1 className=" text-lg font-bold">Pick add-ons</h1>
        <p>add-ons helps your gaming experience</p>
      </div>

      <div className="grid gap-5">
        {addons.map((addon) => (
          <div
            key={addon.title}
            className="   flex justify-between p-4   px-6 items-center border border-black rounded-md  "
          >
            <div className="flex items-center gap-5">
              <input
                className=" h-5 w-5"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log(router.query);
                    router.push({
                      query: {
                        ...router.query,
                        addon: ["online_service", "other"],
                      },
                    });
                  } else {
                    delete router.query[addon.slug];
                    router.push({
                      query: { ...router.query },
                    });
                  }
                  console.log(e.target.checked);
                }}
              />
              <div>
                <p className=" font-semibold text-blue-950"> {addon.title} </p>
                <p className=" text-slate-500"> {addon.feature} </p>
              </div>
            </div>

            <div>
              <p>
                {router.query.duration === "yearly"
                  ? addon.priceY
                  : addon.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div class>
        <div className="  flex justify-between p-4 px-6 items-center border border-black rounded-md  ">
          <div className=" items-center flex gap-5">
            <input className=" h-5 w-5" type="checkbox" required />
            <div>
              <p className=" text-blue-950">Online services</p>
              <p className=" text-slate-500">Acess to multipla games</p>
            </div>
          </div>

          <p className=" text-blue-500">+$1/m</p>
        </div>
        <div className=" my-6 flex justify-between p-4 px-6 items-center border border-black rounded-md  ">
          <div className=" items-center flex gap-5">
            <input className=" h-5 w-5" type="checkbox" />
            <div>
              <p className=" text-blue-950">Large storage</p>
              <p className=" text-slate-500">Extra 1TB of cloud save</p>
            </div>
          </div>

          <p className=" text-blue-500">+$2/m</p>
        </div>
        <div className="  flex justify-between p-4 px-6 items-center border border-black rounded-md  ">
          <div className=" items-center flex gap-5">
            <input className=" h-5 w-5" type="checkbox" />
            <div>
              <p className=" text-blue-950">Customizble profile</p>
              <p className=" text-slate-500">Custom theme to your profile</p>
            </div>
          </div>

          <p className=" text-blue-500">+$1/m</p>
        </div> */}

      <div className=" flex justify-between mt-20">
        <button
        onClick={()=>{
          router.push('/plan')
        }}
        >Go Back</button>
        <button className=" bg-blue-950 text-white p-3 px-5 rounded-md">
          Next Step
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
