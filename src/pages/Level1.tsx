import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonLabel, IonInput,IonGrid, IonButton  } from '@ionic/react';
import  './Level1.css';
import Clock from '../components/Clock';
import InputContainer from '../components/InputContainer';
import PageLayout from '../components/PageLayout';
import {generateRandomNumber } from '../util';
import { useGameContext } from '../gameContext/gameProvider';



const Level1: React.FC = () => {
    // const [life,setLife] = useState(3);
    const { submitHandler,gameOver,setGameOver,setStart,start,restore,score,chanceLeft} = useGameContext();
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [hourInput, setHourInput] = useState<number>(0);
    const [minuteInput, setMinuteInput] = useState<number>(0);
   
  useEffect(()=>{
    setHour(generateRandomNumber())
    setMinute(() => {
      const num = generateRandomNumber();
      return num==12?0:num;
    })
  },[score,chanceLeft])
    
    
  return (
    <PageLayout pageTitle={"Level 1: Color Clock"}>  
      {/*  <div className='score-label'>Score:{score}</div> */}
      <IonTitle className='text-white score-label'>Score:{score}</IonTitle>
      <IonContent className="ion-padding">
      {gameOver && <IonButton color="danger" size="large" >Game Over</IonButton> }
        <Clock hour={hour} minute={minute} hands={true}/>
        {(start && !gameOver)  && <><IonGrid>
          <InputContainer hourInputHandler={(val:number) => setHourInput(prev => prev+val)} minuteInputHandler={(val:number)=> setMinuteInput(prev => prev+val)} hourInput={hourInput} minuteInput={minuteInput}/>
        </IonGrid>
        <IonGrid>
          <button className='game-button success' onClick={() => submitHandler(hourInput,minuteInput,hour,minute)}>
              Done
          </button>
        </IonGrid>
        </>}

        {/* color={start && !gameOver?"danger":"success"} */}
        <button  className={`game-button ${start && !gameOver?"danger":"success"}`} onClick={ ( ) =>{ setStart(prev => !prev); setGameOver(false); restore()}  }>
            {start && !gameOver?"Quit":"Start"}
        </button>
      </IonContent>
    </PageLayout>
  );
};

export default Level1;
