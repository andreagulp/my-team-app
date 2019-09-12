import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchSingleEmployee } from "../actions/employees_action";
import Loader from "../components/Loader";

function EmployeeDetailView(props) {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.singleEmployee);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    dispatch(fetchSingleEmployee(props.match.params.employeeid));
    return () => setCurrentEmployee(null);
  }, [dispatch, props.match.params.employeeid]);

  useEffect(() => {
    setCurrentEmployee(employee);
    return () => setCurrentEmployee(null);
  }, [employee]);

  if (!currentEmployee) {
    return <Loader />;
  }
  return (
    <div>
      <h1>HHHHH</h1>
      {currentEmployee.name}
    </div>
  );
}

export default EmployeeDetailView;
