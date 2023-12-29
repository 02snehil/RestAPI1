import { useRef,useState } from "react";
import snehil from "axios";
const Insert_Record=()=>{
   const [res,setRes]=useState({});
   const ref1 = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null);
   const ref4 = useRef(null);
   const ref5 = useRef(null);
   const post_data=()=>{
    postEx();
   }
   const postEx=async()=>{
    const res=snehil.post("http://localhost:9000/save",
                           {"sname":ref1.current.value,
                            "course":ref2.current.value,
                            "s1":ref3.current.value,
                            "s2":ref4.current.value,
                            "s3":ref5.current.value});
                         
                            { alert("Data insert Successfully")}    
    const{data}=res;
    setRes(data);                        
   }
   return(
    <>
       Student Name:<input type="text" ref={ref1} /><br /><br />
       Course:<input type="text" ref={ref2} /><br /><br />
       Subject1:<input type="text" ref={ref3} /><br /><br />
       Subject2:<input type="text" ref={ref4} /><br/><br />
       Subject3:<input type="text" ref={ref5} /><br /><br />
                <button onClick={post_data}>Save Details</button>
                  
    </>
   )
}
export default Insert_Record