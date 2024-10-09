import React, {useState,useEffect } from 'react';
import { IonContent,IonButton  } from '@ionic/react';
import  './Level1.css';
import Clock from '../components/Clock';
import InputContainer from '../components/InputContainer';
import PageLayout from '../components/PageLayout';
import ColorBox from '../components/ColorBox';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 12);
}

const Level3: React.FC = () => {
  const [gameOver,setGameOver] = useState(false)
  const [start,setStart] = useState(false);
  const [score,setScore] = useState(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);  
  const [hourInput, setHourInput] = useState<number>(0);
  const [minuteInput, setMinuteInput] = useState<number>(0);

  const submitHandler = () => {
    if(hour == hourInput && minute == minute){
      setScore(prev => prev+10);
    }else{
      setGameOver(true)
      setScore(0);
      setStart(false);
    }
  }

useEffect(()=>{
  setHour(generateRandomNumber()+1)
  setMinute(generateRandomNumber())
},[score])
  return (
    <PageLayout pageTitle={"Level 3: Color Clock"}>  
      <div className='score-label text-white'>Score:{score}</div>
      <IonContent className="ion-padding">
      {(!start || gameOver) && <Clock hour={hour} minute={minute} hands={true}/>}
      {gameOver && <IonButton color="danger" size="large" >Game Over</IonButton> }
      {(start && !gameOver) && <><ColorBox size="large" hour={hour} minute={minute}/>
      <InputContainer hourInputHandler={(val:number) => setHourInput(prev => prev+val)} minuteInputHandler={(val:number)=> setMinuteInput(prev => prev+val)} hourInput={hourInput} minuteInput={minuteInput}/>
        <IonButton expand="block" color="success" onClick={submitHandler}>
            Done
        </IonButton></>
      }
      <IonButton expand="block" color={start && !gameOver?"danger":"success"} onClick={ ( ) =>{ setStart(prev => !prev); setGameOver(false)}}>
            {start && !gameOver?"Quit":"Start"}
        </IonButton>
      </IonContent>
    </PageLayout>
  );
};

export default Level3;
