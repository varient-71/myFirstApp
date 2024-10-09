import React,{useState} from 'react'
import { IonInput,IonButton } from '@ionic/react'
function InputContainer({hourInput,minuteInput,hourInputHandler,minuteInputHandler}) {

  // handleHour={() => setHourInput(prev => prev+1)} handleMinute={()=> setHourInput(prev => prev+5)} hour={hourInput} minute={minuteInput}
  return (
    <div className="layout-center">
          <div className='input-sub-container'>
            <IonButton className="btn" fill="clear" onClick={()=>{ if(hourInput>1) hourInputHandler(-1)}}>-</IonButton>
            <IonInput
              className='input-box'
              type="text"
              value={hourInput}
              min="0"
              max="12"
              readonly={true}
            />
            <IonButton className="btn" fill="clear" onClick={()=>{ if(hourInput<12) hourInputHandler(1)}}>+</IonButton>
          </div> 
          <p className='text-white'>:</p>
          <div className='input-sub-container'>
            <IonButton className="btn" fill="clear" onClick={()=>{ if(minuteInput>0) minuteInputHandler(-5)} }>-</IonButton>
            <IonInput
              className='input-box'
              type="text"
              value={minuteInput}
              min="0"
              max="59"
              readonly={true}
            />
            <IonButton className="btn" fill="clear" onClick={()=>{ if(minuteInput<55) minuteInputHandler(5)}}>+</IonButton>
          </div>  
    </div>
  )
}

export default InputContainer