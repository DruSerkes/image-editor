import * as React from 'react';

export const Slider = ({ min, max, value, name, changeValue }) => {
  const handleChange = ({ target }) => changeValue(name, target.value);
  return (
    <div className='slider-container'>
      <input
        type="range"
        className='slider'
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </div>
  )
};