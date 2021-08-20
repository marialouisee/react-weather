import React, {useState, useEffect} from 'react'

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      addEventListeners();
      return () => removeEventListeners();
    });

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };
    const onMouseEnter = () => {
        setHidden(false);
    };
        
    const onMouseDown = () => {
         setClicked(true);
     };
  
     const onMouseUp = () => {
         setClicked(false);
     };
      
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };  
    

    return (
        <div className={`cursor ${hidden? 'cursorHidden': ""} ${clicked? 'cursorClicked': ""} `} style={{left: `${position.x}px`, top: `${position.y}px`}}>   
        </div>
    )
}

export default Cursor
