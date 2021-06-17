import React from 'react';
import PropTypes from 'prop-types';
import './NativeSelect.css';

function NativeSelect(props) {
  return (
    <select className='nativeSelect'>
      {props.options.map((item) => {
        return (<option key={item}>{item}</option>)
      })}
    </select>
  );
}

NativeSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default NativeSelect;
