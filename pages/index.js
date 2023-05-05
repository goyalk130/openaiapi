"use client";
import Query from "@/components/Query";
import Addquery from "@/utils/Addquery";
import { useState } from "react";

export default function Home() {
  const [data, setdata] = useState([]);

  const [key, setkey] = useState("");
  const [query, setquery] = useState("");
  const [API_KEY, setAPI_KEY] = useState("");
  let API_URL = "https://api.openai.com/v1/chat/completions";

  async function generate(){
    try{
        let response = await fetch(API_URL,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${API_KEY}`,
          },
          body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:query}]
          })
        })

        const res = await response.json()
        console.log(res.choices[0].message.content)
        setdata((d)=>{
          return [...data,{query:query,reply:res.choices[0].message.content}]
        }) 
    }catch (ERROR){}
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="lg:w-1/3 w-1/2 h-1/2 border-blue-800 rounded-md border-solid border-[1px] backdrop-blur-md bg-black p-2">
          <div className="w-full h-full gap-3 flex flex-col ">
            <div className="flex-0 p-2">
              <h1 className="text-xl pb-2">
                {API_KEY ? "Enter Your queries here" : "Enter API KEY here"}
              </h1>
              <div className="w-full border-blue-800 border-solid border-t-[1px] "></div>
            </div>
            <div className="flex-1 p-2 overflow-scroll no-scrollbar">
              {data.map((item) => (
                <Query query={item.query} reply={item.reply} />
              ))}
            </div>
            <div className="flex-0 p-2 border-none">
              {API_KEY ? (
                <input id="query"  
                  onChange={(e) => {
                    setquery(e.target.value);
                  }}
                  className="w-full bg-inherit border-solid border-blue-950 border-[1px] p-1 focus:border-none"
                  type="search"
                  placeholder="Enter query here"
                />
              ) : (
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    setkey(e.target.value);
                  }}
                  className="w-full bg-inherit border-solid border-blue-950 border-[1px] p-1 focus:border-none"
                  type="text"
                  placeholder="type here"
                />
              )}
            </div>
            <div className="flex-0 p-2">
              {API_KEY ? (
                <button
                  onClick={() => {

                    generate()
                  }}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => {

                    setAPI_KEY(key);
                  }}
                  className=""
                >
                  Submit Key
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export  {data,setdata};
