import { Slider } from './Slider';
import { SidebarItem } from './SidebarItem';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='main-image' />
      <div className='sidebar'>
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
