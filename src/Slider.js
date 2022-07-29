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
      <div className='range-value-container'>
        <span className='min-range'>{min}</span>
        <span className='value-range'>{value}</span>
        <span className='max-range'>{max}</span>
      </div>
    </div>
  )
};