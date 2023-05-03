import { setdata } from "@/pages";
const Addquery = (query)=>{
        setdata((data)=>{
            return [...data,query]
        })
}

export default Addquery;