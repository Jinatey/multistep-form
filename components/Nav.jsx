import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bgimg h-full rounded-lg">
      <div>
        <ul>
          <li className=" ">
            <Link href="/" className=" items-center grid grid-cols-[30px_auto] ">
              <p>1</p>
              <div>
                <p className=" font-normal ">step 1</p>
                <p>YOUR INFO</p>
              </div>
            </Link>
          </li>

          <li >
            <Link href="/plan"  className=" items-center grid grid-cols-[30px_auto] ">
              
            <p> 2 </p> 
            <div>
              <p>step 2</p>
              <p> SELECT PLAN </p>
            </div>
            
            </Link>{" "}
          </li>

        
          <li>
            <Link href="/addons"  className=" items-center grid grid-cols-[30px_auto] ">
              <p> 3 </p>
          <div>
               <p>step 3</p>
               <p> ADD-ONS</p>
          </div>
             
              
              </Link>{" "}
          </li>


          <li>
            <Link href="/summury"  className=" items-center grid grid-cols-[30px_auto] ">
              <p> 4 </p>

              <div>
                <p>step 4</p>
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
