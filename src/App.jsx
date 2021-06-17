import React from 'react';
import Button from './components/button/button';
import Input from './components/input/input';
import Form from './components/form/form';
import NativeSelect from './components/select/NativeSelect';
import Select from './components/select/Select';
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
        <Button label="Button" type="secondary" size="big" />
      </div>
      <Form onSubmit={Form}>
        <FormItem>
          <Input />
        </FormItem>
        <FormItem>
          <Select options={['red', 'green', 'blue']} />
        </FormItem>
        <FormItem>
          <Select options={['red', 'green', 'blue']} />
        </FormItem>
        <FormItem>
          <Select options={['red', 'green', 'blue']} />
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
