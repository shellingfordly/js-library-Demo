<script setup>
import Form, { FormItem } from "./Form";

const form = Form.useForm();

</script>

<template>
  <Form :form="form">
    <FormItem>
      <input />
    </FormItem>
  </Form>
</template>
