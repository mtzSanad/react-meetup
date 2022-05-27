import { useState } from "react";

const Test = ({ text }) => {
  const [show, setShow] = useState(false);
  const deleteHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <h1>TEST</h1>
      <div>{text}</div>
      <button onClick={deleteHandler}>Show Details</button>
      {show && <div>Detials here {text}</div>}
    </>
  );
};

export default Test;
