import React from 'react'

function Clock({hour,minute,hands}) {
  return (
    <div className="clock">
            <div className="color-wheel"></div>
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