import { useRef, useState } from "react";
import axios from "axios";

const Update_Record = () => {
  const [res, setRes] = useState({});
  const refSid = useRef(null); // Reference for student ID
  const refSname = useRef(null); // Reference for student name
  const refCourse = useRef(null); // Reference for course
  const refS1 = useRef(null); // Reference for subject1
  const refS2 = useRef(null); // Reference for subject2
  const refS3 = useRef(null); // Reference for subject3

  const updateData = async () => {
    try {
      const res = await axios.put(`http://localhost:9000/update/${refSid.current.value}`, {
        sname: refSname.current.value,
        course: refCourse.current.value,
        s1: refS1.current.value,
        s2: refS2.current.value,
        s3: refS3.current.value,
      });

      const { data } = res;
      setRes(data);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Error updating record:", error.message);
      // Handle error as needed
    }
  };

  return (
    <>
      Student ID:<input type="text" ref={refSid} /><br /><br />
      Student Name:<input type="text" ref={refSname} /><br /><br />
      Course:<input type="text" ref={refCourse} /><br /><br />
      Subject1:<input type="text" ref={refS1} /><br /><br />
      Subject2:<input type="text" ref={refS2} /><br /><br />
      Subject3:<input type="text" ref={refS3} /><br /><br />
      <button onClick={updateData}>Update Record</button>
      <h1>{res.message}</h1>
    </>
  );
};

export default Update_Record;
