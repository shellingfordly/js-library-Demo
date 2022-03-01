import { useEffect } from "react";
import { Form, FormItem, useForm } from "../../form";

export default function FormPage() {
  const [form] = useForm();

  useEffect(() => {
    form.setFormValue({
      username: "username",
      password: "password",
    });
  }, [form]);

  return (
    <Form form={form}>
      <FormItem name="username">
        <input />
      </FormItem>
      <FormItem name="password">
        <input />
      </FormItem>
    </Form>
  );
}
