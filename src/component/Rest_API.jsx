import { useEffect, useState } from "react";
import axios from "axios"

const Rest_API=()=>{
  const [arr,setArr] = useState([]);
  const getData = async ()=>{
    const res = await axios.get("http://localhost:9000/getAll");
    const {data} = res;
    setArr(data);
  }
  useEffect(()=>{
    getData();
  },[]);
  return(
    <>
    <table border={1}
            align="center"
            cellPadding={10}
            cellSpacing={10}>
      <tbody>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Course </th>
            <th>Subject 1</th>
            <th>Suject 2</th>
            <th>Suject 3</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Result</th>
          </tr>
          {
            arr.map((element,index)=>{
                return(
                    <>
                       <tr key={index}>
                          <td>{element.sid}</td>
                          <td>{element.sname}</td>
                          <td>{element.course}</td>
                          <td>{element.s1}</td>
                          <td>{element.s2}</td>
                          <td>{element.s3}</td>
                          <td>{element.total}</td>
                          <td>{element.percentage}</td>
                          <td>{element.grade}</td>
                          <td>{element.result}</td>
                       </tr>
                    </>
                )
            })
          }
        </thead>
      </tbody>
    </table>
    </>
  )
}
export default Rest_API;