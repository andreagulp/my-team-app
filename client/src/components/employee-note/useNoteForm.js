import { useState } from "react";

function useNoteForm(initialState, callback) {
  const [noteField, setNoteField] = useState(initialState);

  const handleChangeField = e => {
    setNoteField({ ...noteField, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    callback();
  };

  return { noteField, handleChangeField, setNoteField, handleSubmit };
}

export default useNoteForm;
