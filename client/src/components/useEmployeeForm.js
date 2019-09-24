import { useState } from "react";

function useEmployeeForm(initialState, callback) {
  const [item, setItem] = useState(initialState);

  const handleChangeField = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleChangeAvatar = iconSrc => {
    setItem({ ...item, iconsUrl: iconSrc });
  };

  const handleSubmit = () => {
    callback();
  };

  return { item, handleChangeField, handleChangeAvatar, setItem, handleSubmit };
}

export default useEmployeeForm;
