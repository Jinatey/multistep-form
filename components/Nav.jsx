import React from "react";
import { useRouter } from "next/router";

const navDAta = [
  { stepName: "YOUR INFO", path: "/" },
  { stepName: "SELECT PLAN", path: "/plan" },
  { stepName: "ADDONS", path: "/addons" },
  { stepName: "SUMMARY", path: "/summary" },
];

const Nav = () => {
  const router = useRouter();
  return (
    <div className="bgimg h-full rounded-lg">
      <div className=" text-white">
        <ul className=" p-5">
          {navDAta.map((nav, idx) => {
            return (
              <li className="p-3">
                <div className=" items-center grid grid-cols-[25px_auto] gap-6 ">
                  <p
                    className={`border text-center rounded-full text h-8 w-8 ${
                      router.pathname === nav.path
                        ? " bg-blue-200 text-black"
                        : ""
                    } `}
                  >
                    {idx + 1}
                  </p>
                  <div>
                    <p className=" text-sm text-slate-200">step {idx + 1}</p>
                    <>{nav.stepName}</>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
