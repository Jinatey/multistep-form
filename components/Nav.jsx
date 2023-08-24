import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Nav = () => {
  const pathname = usePathname()
  const isAddons = pathname === '/addons'
  
 console.log(pathname)
 
  return (
    <div className="bgimg h-full rounded-lg">
      <div className=" text-white">
        <ul className=" p-5">
          <li className=" p-3">
            <Link href="/" className=" items-center grid grid-cols-[25px_auto] gap-6 ">
              <p className="border-2 text-center rounded-full text h-8 w-8  ">1</p>
              <div>
                <p className=" text-sm text-slate-200">step 1</p>
                <p>YOUR INFO</p>
              </div>
            </Link>
          </li>

          <li className=" p-3">
            <Link href="/plan"  className=" items-center grid grid-cols-[25px_auto] gap-6 ">
              
            <p className="border-2 text-center rounded-full text h-8 w-8  "> 2 </p> 
            <div>
              <p  className=" text-sm  text-slate-200">step 2</p>
              <p> SELECT PLAN </p>
            </div>
            
            </Link>{" "}
          </li>

        
          <li className="p-3">
            <Link href="/addons"  className={` items-center grid grid-cols-[25px_auto] gap-6 ${ isAddons ? 'bg-white':''} `}>
              <p className="border-2 text-center rounded-full text h-8 w-8 "> 3 </p>
          <div>
               <p  className=" text-sm  text-slate-200">step 3</p>
               <p> ADD-ONS</p>
          </div>
             
              
              </Link>{" "}
          </li>


          <li className="p-3">
            <Link href="/summury "  className=" items-center grid grid-cols-[25px_auto] gap-6 ">
              <p className="border-2 text-center rounded-full text h-8 w-8 "> 4 </p>
              <div>
                <p  className=" text-sm  text-slate-200">step 4</p>
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
