import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
import './select.css';

function Select(props) {
  const [open, setOpen] = useState(false);
  function useOutsideAlerter(ref) {
    function handleClicklOutside(e) {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    }
    useEffect(() => {
      document.addEventListener('mousedown', handleClicklOutside);
      return () => {
        document.removeEventListener('mousedown', handleClicklOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [value, setValue] = useState(props.options[0]);

  const changeValue = (e) => {
    setValue(e.target.innerText);
  };

  return (
     <div className='select-wrap' ref={wrapperRef}>
      <div className={`select ${open ? 'select-active' : ''}`} onClick={e => setOpen(!open)}>
        {value}
          <FaChevronDown className={`rotate ${open ? 'rotate-active' : ''}`} />
        <div
        className={`select-list ${open ? 'select-list-active' : ''}`}>
          {props.options.map((item) => {
            return (<div className={`select-item ${value === item ? 'select-item-active' : ''}`} onClick={changeValue} key={item}>{item}</div>)
        })}
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default Select;
