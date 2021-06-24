import React from 'react';
import Button from './components/button/button';
import Input from './components/input/input';
import Form from './components/form/form';
import NativeSelect from './components/select/NativeSelect';
import Select from './components/select/Select';
import Toggle from './components/toggle/Toggle';
import './components/index.css';

function FormItem(props) {
  return(
    <div style={{ width:'200px', marginBottom:'10px' }}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="title">React test</h1>
      <div className="btn">
        <Button label="Button" type="primary" size="small" />
      </div>
      <Form onSubmit={Form}>
        <FormItem>
          <Input />
        </FormItem>
        <FormItem>
          <NativeSelect options={['red', 'green', 'blue']} />
        </FormItem>
        <FormItem>
          <Select options={['red', 'green', 'blue']} />
        </FormItem>
        <FormItem>
          <Select options={['red', 'green', 'blue']} />
        </FormItem>
      </Form>
      <Toggle />
    </div>
  );
}

export default App;
