import './App.css'
import { useEffect, useState } from 'react'
import { colorList } from './utils/data'

function App() {
  const colorsArr = Object.entries(colorList).map(([color, hex]) => ({
    color,
    hex,
  }));
  console.log(colorsArr);
  
  const [bgColor, setbgColor] = useState(changeColor());  
  const [displayMode, setdisplayMode] = useState('color');     

  useEffect(() => {     
    document.body.style.backgroundColor = bgColor.hex;
    document.title = `Background Color Flipper - ${bgColor.color}`;    
    
    const updateColorDisplay = () => {
      if (displayMode === 'color') {
        return bgColor.color;
      } else if (displayMode === 'hex') {
        return bgColor.hex.toUpperCase();
      }
    }

    const colorDisplay = document.getElementById('display');
    if (colorDisplay) {
      colorDisplay.innerText = updateColorDisplay();
    }
    }, [bgColor, displayMode]   
  );  
  
  function changeColor() {
    const randomColorIndex = Math.floor(Math.random() * colorsArr.length);
    return colorsArr[randomColorIndex];
  }

  const handleChangeColor = () => {
    setbgColor(changeColor());
  }

  const handleDisplayMode = (mode) => {
    setdisplayMode(mode);
  }
 
  return (
    <>
      <nav>
        <div className='nav-container'>
          <h2>Color Flipper</h2>
          <ul className='nav-links'>
            <li><a href="#" onClick={() => handleDisplayMode('color')}>Name</a></li>
            <li><a href="#" onClick={() => handleDisplayMode('hex')}>Hex</a></li>            
          </ul>
        </div>
      </nav>
      <section>
        <div className='main-container'>
        <div className='colorFlipper'>
        <h2 className='color-text'>Background Color: <span id='display'></span></h2>
          <button className='btn' onClick={handleChangeColor}>
            Change Color
          </button>
        </div>
        </div>
      </section>
    </>
  )
}

export default App