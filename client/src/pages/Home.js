import React from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../actions/employees_action";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Hello Home</h4>
      <button onClick={() => dispatch(addEmployee())}>ADD</button>
    </div>
  );
}

export default Home;
