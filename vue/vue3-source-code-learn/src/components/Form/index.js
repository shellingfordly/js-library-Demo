import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import useForm from "./useForm";

Form.FormItem = FormItem;
Form.useForm = useForm;

export { FormItem, useForm };
export default Form;
