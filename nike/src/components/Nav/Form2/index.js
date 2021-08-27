import React, { useState } from "react";
import { useFormik, Formik, Form } from "formik";
import { BsSearch, BsHeart, BsBag, BsTypeBold } from "react-icons/bs";

function FormSearch2(props) {
  const [state, setState] = useState("");
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const values = e.target.value;
    console.log(values);
    if (Number(values) < 0) {
      return;
    }
    setState(values);
  };
  return (
    <div className="formSearch">
      <div className="icon">
        <BsSearch />
      </div>
      <input
        name="name"
        type="text"
        onChange={(e) => handleChange(e)}
        value={state}
      />
      <button type="Button" onClick={handleSubmit}>
        Summit
      </button>
    </div>
  );
}

export default FormSearch2;
