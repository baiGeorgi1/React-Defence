import { useState } from "react";

export const useForm = (values, submitHandler) => {
  const [formValues, setformValues] = useState(values);
  const onChangeHandler = (e) => {
    setformValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (submitHandler) {
      submitHandler(formValues);
    }
  };
  return {
    formValues,
    onChangeHandler,
    onSubmit,
  };
};
