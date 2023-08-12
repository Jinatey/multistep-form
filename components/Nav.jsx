import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bgimg h-full rounded-lg">
      <div>
        <ul className=" p-5">
          <li className=" p-3">
            <Link href="/" className=" items-center grid grid-cols-[25px_auto] ">
              <p className="border text-center rounded-full text  ">1</p>
              <div>
                <p className=" text-sm">step 1</p>
                <p>YOUR INFO</p>
              </div>
            </Link>
          </li>

          <li className=" p-3">
            <Link href="/plan"  className=" items-center grid grid-cols-[25px_auto] ">
              
            <p className="border text-center rounded-full "> 2 </p> 
            <div>
              <p  className=" text-sm">step 2</p>
              <p> SELECT PLAN </p>
            </div>
            
            </Link>{" "}
          </li>

        
          <li className="p-3">
            <Link href="/addons"  className=" items-center grid grid-cols-[25px_auto] ">
              <p className="border text-center rounded-full"> 3 </p>
          <div>
               <p  className=" text-sm">step 3</p>
               <p> ADD-ONS</p>
          </div>
             
              
              </Link>{" "}
          </li>


          <li className="p-3">
            <Link href="/summury"  className=" items-center grid grid-cols-[25px_auto] ">
              <p className="border text-center rounded-full "> 4 </p>

              <div>
                <p  className=" text-sm">step 4</p>
              <p>SUMMURY</p>
              </div>
              
              </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
