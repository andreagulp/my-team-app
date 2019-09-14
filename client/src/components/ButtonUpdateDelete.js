import React from "react";

function ButtonUpdateDelete() {
  return (
    <>
      <Button
        onClick={handleSubmit}
        variant="outlined"
        className={classes.button}
      >
        {mode}
      </Button>
      <Button
        onClick={handleDelete}
        variant="outlined"
        className={classes.button}
      >
        DELETE
      </Button>
    </>
  );
}

export default ButtonUpdateDelete;
