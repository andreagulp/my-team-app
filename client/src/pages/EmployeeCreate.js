import React from "react";
import { useDispatch } from "react-redux";

import { addEmployee } from "../actions/employees_action";
import { initialEmployee } from "../utils/interfaces";
import useDialog from "../components/useDialog";
import useForm from "../components/useForm";
import EmployeeForm from "../components/EmployeeForm";

function EmployeeCreate({ history }) {
  const dispatch = useDispatch();

  const handleAddEmployee = () => {
    dispatch(addEmployee(item));
    history.push("/employees");
  };

  const { open, handleOpen, handleClose } = useDialog();
  const { item, handleChangeField, handleChangeAvatar } = useForm(
    initialEmployee,
    handleAddEmployee
  );

  return (
    <EmployeeForm
      mode="CREATE"
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      item={item}
      handleChangeField={handleChangeField}
      handleChangeAvatar={handleChangeAvatar}
      handleSubmit={handleAddEmployee}
    />
  );
}

export default EmployeeCreate;
