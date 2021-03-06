import React from 'react';
import './input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default Input;
