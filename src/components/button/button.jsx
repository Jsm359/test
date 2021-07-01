import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  render() {
    const className = `button button-animate button__${this.props.type} button__${this.props.size}`;

    return (
      <button className={className} onClick={this.onClick}>
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  size: 'small',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  type: PropTypes.oneOf(['secondary', 'primary']).isRequired,
};

export default Button;
