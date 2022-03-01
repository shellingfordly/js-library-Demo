import { ref } from "vue";
class FormState {
  state = {};
  getFormValue(name) {
    return this.state[name];
  }
}

export default function useForm() {
  const form = ref();
  if (!form.value) {
    form.value = new FormState();
  }

  return form.value;
}
