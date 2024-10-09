import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonLabel, IonInput,IonGrid, IonButton  } from '@ionic/react';
import  './Level1.css';
import Clock from '../components/Clock';
import InputContainer from '../components/InputContainer';
import PageLayout from '../components/PageLayout';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 12);
}

const Level1: React.FC = () => {
    // const [life,setLife] = useState(3);
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
      }
      else{
        setGameOver(true)
        setScore(0);
        setStart(false);
      }
    }
  
  useEffect(()=>{
    setHour(generateRandomNumber())
    setMinute(generateRandomNumber())
  },[score])
    
    
  return (
    <PageLayout pageTitle={"Level 1: Color Clock"}>  
      <div className='score-label text-white'>Score:{score}</div>
      <IonContent className="ion-padding">
        <Clock hour={hour} minute={minute} hands={true}/>
        {gameOver && <IonButton color="danger" size="large" >Game Over</IonButton> }
        {(start && !gameOver)  && <><IonGrid>
          <InputContainer hourInputHandler={(val:number) => setHourInput(prev => prev+val)} minuteInputHandler={(val:number)=> setMinuteInput(prev => prev+val)} hourInput={hourInput} minuteInput={minuteInput}/>
        </IonGrid>
        <IonButton expand="block" color="success" onClick={submitHandler}>
            Done
        </IonButton>
        </>}
        <IonButton expand="block" color={start && !gameOver?"danger":"success"} onClick={ ( ) =>{ setStart(prev => !prev); setGameOver(false)}}>
            {start && !gameOver?"Quit":"Start"}
        </IonButton>
      </IonContent>
    </PageLayout>
  );
};

export default Level1;
