import React from 'react'

function Clock({hour,minute,hands}) {
  return (
    <div className="clock">
            <img id="colorWheel" src="src/assets/images/color-wheel.png" alt="Color Wheel" className="color-wheel" />
            <div className="dot"></div>
            {hands && <div >
                <div className="hour-hand" style={{transform: `rotate(${hour*30}deg)`}}></div>
                <div className="minute-hand" style={{transform: `rotate(${minute*30}deg)`}}></div>
                <div className="second-hand"></div>
            </div>}
        </div>
  )
}

export default Clock