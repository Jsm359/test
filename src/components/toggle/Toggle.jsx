import React, { useState } from 'react';
import './Toggle.css';

function Toggle() {
  const [state, setState] = useState(false);
  const onToggle = () => setState(!state);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={state} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default Toggle;
