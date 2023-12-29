import axios from "axios";
import { useRef, useState } from "react";

const Delete_Record = () => {
  const [num, setNum] = useState(null);
  const ref1 = useRef(null);

  const delete_Data = async () => {
    const res = await axios.delete(`http://localhost:9000/delete/${ref1.current.value}`);
    const { status } = res;
    setNum(status);
  };

  const deleteData = () => {
    delete_Data();
  };

  return (
    <>Student ID:
      <input type="text" ref={ref1} /><br /><br />
      <button onClick={deleteData}>Delete Record</button>
      <h1>{num}</h1>
    </>
  );
};

export default Delete_Record;