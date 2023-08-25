import './App.css'
import { useEffect, useState } from 'react'
import { colorList } from './utils/data'

const App = () => {
  const colorsArr = Object.entries(colorList);
  //console.log(colorsArr);
  
  const [bgColor, setbgColor] = useState(0); 
  //const [displayName, setdisplayName] = useState();
  //const [displayMode, setdisplayMode] = useState("name");
  const [colorName, colorCode] = colorsArr[bgColor];  

  useEffect(() => {    
    document.body.style.backgroundColor = colorCode;
    document.title = `Background Color Flipper - ${colorName}`;    
    }      
  );  

  const changeColor = () => {
    const randColorIndex = Math.floor(Math.random() * colorsArr.length);
    setbgColor(randColorIndex);        
  }; 
 
  return (
    <>
      <nav>
        <div className='nav-container'>
          <h2>Color Flipper</h2>
          <ul className='nav-links'>
            <li><a href="#">Name</a></li>
            <li><a href="#">Hex</a></li>            
          </ul>
        </div>
      </nav>
      <section>
        <div className='main-container'>
        <div className='colorFlipper'>
          <h2 className='color-text'>Background Color: <span className='displayText'>{colorName}</span></h2>
          <button className='btn' onClick={changeColor}>
            Change Color
          </button>
        </div>
        </div>
      </section>
    </>
  )
}

export default App