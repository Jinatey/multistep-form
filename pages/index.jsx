import React from "react";
import { useRouter } from "next/router";
import { useSnapshot } from "valtio";

import { state } from "@/state";

export default function home() {
  const router = useRouter();
  const snap = useSnapshot(state);

  return (
    <div className=" mx-auto w-[500px]">
      <div className=" my-6">
        <h1 className=" text-lg font-bold">Personal info</h1>
        <p>Please provide your name, email adress and phone number.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/plan");
        }}
        className=" grid gap-6"
      >
        <label className="grid ">
          Name
          <input
            value={snap.name}
            className=" p-1 rounded-md border-2 border-slate-550"
            type="text"
            required
            onChange={(e) => {
              state.name = e.target.value;
            }}
          />
        </label>
        <label className="grid">
          Email adress
          <input
          value={snap.email}
            className=" p-1 rounded-md border-2 border-slate-550"
            type="text"
            required
            onChange={(e) => {
              state.email = e.target.value;
            }}
          />
        </label>
        <label className="grid">
          Phone Number
          <input
          value={snap.number}
            className=" p-1 rounded-md border-2 border-slate-550"
            type="number"
            required
            onChange={(e) => {
              state.number = e.target.value;
            }}
          />
        </label>

        <div className=" flex justify-end mt-20">
          <button className=" bg-blue-950 text-white p-3 px-5 rounded-md">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
