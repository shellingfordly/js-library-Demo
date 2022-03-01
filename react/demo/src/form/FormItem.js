import { cloneElement, useContext } from "react";
import { FormContext } from "./useContext";

export default function FormItem({ children, name }) {
  const formContext = useContext(FormContext);
  

  function getAttrs() {
    return {
      value: formContext.getFormValue(name),
      onChange(event) {
        formContext.setFormValue({ [name]: event.target.value });
      },
    };
  }

  return <div>{cloneElement(children, getAttrs())}</div>;
}
