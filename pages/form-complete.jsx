import React from "react";

const formComplete = () => {
  return (
    <div className=" mx-auto w-[500px] grid items-center">
      <div className="grid justify-items-center text-center gap-4">
        <img src="/thank-you.svg" alt="" />
        <p className=" font-bold text-4xl text-blue-950">Thank You!</p>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default formComplete;
