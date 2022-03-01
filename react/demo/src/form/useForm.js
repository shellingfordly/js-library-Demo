import { useRef } from "react";

class FormState {
  state = {};
  callbacks = [];

  pushCallback(callback) {
    this.callbacks.push(callback);
  }

  getFormValue(name) {
    return this.state[name];
  }

  setFormValue(newValue) {
    console.log(newValue);
    this.state = Object.assign(this.state, newValue);
    this.callbacks.forEach(([name, callback]) => {
      Object.keys(newValue).forEach((key) => {
        if (name === key) {
          callback();
        }
      });
    });
  }
}

export default function useForm() {
  const form = useRef();

  if (!form.current) {
    form.current = new FormState();
  }

  return [form.current];
}
