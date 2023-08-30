import './App.css'
import { useEffect, useState } from 'react'
import { colorList } from './utils/data'

function App() {
  const colorsArr = Object.entries(colorList).map(([color, hex]) => ({
    color,
    hex,
  }));  
  
  const [bgColor, setbgColor] = useState(changeColor());  
  const [displayMode, setdisplayMode] = useState('color');     

  useEffect(() => {     
    document.body.style.backgroundColor = bgColor.hex;
    document.title = `Background Color Flipper - ${bgColor.color}`;      
    
    const changeWhite = document.getElementById('change');      
    if (bgColor.color === 'MidnightBlue' || bgColor.color === 'Navy' || bgColor.color === 'Black' || bgColor.color === 'Indigo' || bgColor.color === 'Blue' || bgColor.color === 'DarkBlue' || bgColor.color === 'MediumBlue') {      
      changeWhite.style.color = '#F0F8FF';        
    } else {      
      changeWhite.style.color = '#000000';
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
          <div className='nav-links'>
            <h5 className={`mode ${displayMode === 'color' ? 'activeMode' : ''}`} onClick={() => handleDisplayMode('color')}>Name</h5>
            <h5 className={`mode ${displayMode === 'hex' ? 'activeMode' : ''}`} onClick={() => handleDisplayMode('hex')}>Hex</h5>                       
          </div>
        </div>
      </nav>
      <section>
        <div className='main-container'>
        <div className='colorFlipper'>
        <h2 className='color-text' id='change'>Background Color: {
          displayMode === 'color' ? bgColor.color : bgColor.hex.toUpperCase()
        }</h2>
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
