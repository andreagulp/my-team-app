import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchSingleEmployee } from "../actions/employees_action";
import Loader from "../components/Loader";
import useForm from "../components/useForm";
import useDialog from "../components/useDialog";
import { initialEmployee } from "../utils/interfaces";
import EmployeeForm from "../components/EmployeeForm";

function EmployeeDetailView(props) {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.singleEmployee);
  const { open, handleOpen, handleClose } = useDialog();

  const handleUpdateEmployee = () => {
    console.log("update employee record in Mongo");
  };

  const { item, handleChangeField, handleChangeAvatar, setItem } = useForm(
    initialEmployee,
    handleUpdateEmployee
  );

  useEffect(() => {
    dispatch(fetchSingleEmployee(props.match.params.employeeid));
    return () => setItem(null);
  }, [dispatch, props.match.params.employeeid, setItem]);

  useEffect(() => {
    setItem(employee);
    return () => setItem(null);
  }, [employee, setItem]);

  if (!item) {
    return <Loader />;
  }
  return (
    <EmployeeForm
      mode="UPDATE"
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      item={item}
      handleChangeField={handleChangeField}
      handleChangeAvatar={handleChangeAvatar}
      handleSubmit={handleUpdateEmployee}
    />
  );
}

export default EmployeeDetailView;
