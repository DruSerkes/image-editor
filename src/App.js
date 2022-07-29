import { useState } from 'react';
import { Slider } from './Slider';
import { SidebarItem } from './SidebarItem';
import { DEFAULT_OPTIONS } from './Options';
import './App.css';

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTIONS[0]);
  const selectOption = (name) => setSelectedOption(options.find(option => option.name === name));

  const changeValue = (name, value) => setOptions(currentOptions => {
    const indexOfOptionToChange = options.findIndex(option => option.name === name);
    const newOptions = [...currentOptions];
    newOptions[indexOfOptionToChange].value = value;
    return newOptions;
  });

  const getImageStyle = () => {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(' ') };
  };

  return (
    <div className="container">
      <div className='main-image' style={getImageStyle()} />

      <div className='sidebar'>
        {options.map(option => <SidebarItem key={option.name} active={selectedOption.name === option.name} selectOption={selectOption} {...option} />)}
      </div>

      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        name={selectedOption.name}
        value={selectedOption.value}
        changeValue={changeValue}
      />
    </div>
  );
}

export default App;