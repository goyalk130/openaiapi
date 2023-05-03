"use client";
import Addquery from "@/utils/Addquery"
import { useState } from "react";

export default function Home() {

  const [data, setdata] = useState([])


  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
          <div className="lg:w-1/3 w-1/2 h-1/2 border-blue-800 rounded-md border-solid border-[1px] backdrop-blur-md bg-black p-2">
            <div className="w-full h-full gap-3 flex flex-col ">
              <div className="flex-0 p-2">
                <h1 className="text-xl pb-2">Enter Your queries here</h1>
                <div className="w-full border-blue-800 border-solid border-t-[1px] " ></div>
              </div>
              <div className="flex-1 p-2 overflow-scroll no-scrollbar">
                {data.map(item=>(<h2>{item}</h2>))}
              </div>
              <div className="flex-0 p-2">
                <button onClick={()=>setdata(d=>{
                  return [...data,"1"];
                })}>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

// export  {data,setdata};

