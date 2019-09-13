import { useState } from "react";

function useForm(initialState, callback) {
  const [item, setItem] = useState(initialState);

  const handleChangeField = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleChangeAvatar = iconSrc => {
    setItem({ ...item, iconsUrl: iconSrc });
  };

  return { item, handleChangeField, handleChangeAvatar, setItem };
}

export default useForm;
