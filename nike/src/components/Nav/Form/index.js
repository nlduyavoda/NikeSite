import React, { useState } from "react";
import { useFormik, Formik, Form } from "formik";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";

function FormSearch(props) {
  const [state, setState] = useState("");
  const initialValues = { name: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      onChange={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <div className="formSearch">
            <div className="icon">
              <BsSearch />
            </div>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
            />
            <button type="Button" onClick={handleSubmit}>
              Summit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormSearch;
