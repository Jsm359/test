import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
