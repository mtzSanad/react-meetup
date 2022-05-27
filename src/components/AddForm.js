import { useRef } from "react";

const AddForm = () => {
  const meetup = useRef();
  const test = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const myobj = {
      meetup: meetup.current.value,
      test: test.current.value,
    };
    console.log(myobj);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="meetup" id="meetup" ref={meetup} />
      <input type="text" name="test" id="test" ref={test} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default AddForm;
