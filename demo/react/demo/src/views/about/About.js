import { useEffect } from 'react'
import UseEffect from './components/useEffect'
import OptimizationComponent from './components/PureComponent'
import ShouldComponentUpdate from './components/shouldComponentUpdate'
import Form, { Field } from './form'
const nameRule = { required: true, message: 'please write name!' }
const passwordRule = { required: true, message: 'please write password!' }
export default function About() {

  const [form] = Form.useForm()
  function onFinish() {
    console.log('submit success!');
  }
  function onFinishFailed() {
    console.log('submit error!');
  }

  useEffect(()=>{
    console.log(form.store);
  },[form])

  return (
    <div>
      <UseEffect />
      <hr />
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field  name="username" rules={[nameRule]}>
          <input />
        </Field>
        <Field name="password" rules={[passwordRule]}>
          <input  />
        </Field>
        <button>submit</button>
      </Form>
      <hr/>
      PureComponent: <OptimizationComponent/>
      shouldComponentUpdate: <ShouldComponentUpdate/>
    </div>
  )
}