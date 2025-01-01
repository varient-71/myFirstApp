import React, {useState,useEffect } from 'react';
import { IonContent,IonButton,IonGrid} from '@ionic/react';
import  './Level1.css';
import './hours.css'
import Clock from '../components/Clock';
import InputContainer from '../components/InputContainer';
import PageLayout from '../components/PageLayout';
import ColorBox from '../components/ColorBox';
import { generateRandomNumber } from '../util';
import { useGameContext } from '../gameContext/gameProvider';

const Level2: React.FC = () => {
  const { score,setGameOver,setStart,start,gameOver,submitHandler,restore,chanceLeft} = useGameContext();
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
    <PageLayout pageTitle={"Level 2: Color Time"}> 
      <div className='score-label text-white'>Score:{score}</div> 
      <IonContent className="ion-padding">
        {gameOver && <IonButton color="danger" size="large" >Game Over</IonButton> }
        <Clock hour={0} minute={0} hands={false}/>
        {(start && !gameOver) && <><ColorBox hour={hour} minute={minute}/>
        <InputContainer hourInputHandler={(val:number) => setHourInput(prev => prev+val)} minuteInputHandler={(val:number)=> setMinuteInput(prev => prev+val)} hourInput={hourInput} minuteInput={minuteInput}/>
        <IonGrid>
          <button className='game-button success' onClick={() => submitHandler(hourInput,minuteInput,hour,minute)}>
              Done
          </button>
        </IonGrid>
        </>
        }
        <button  className={`game-button ${start && !gameOver?"danger":"success"}`} onClick={ ( ) =>{ setStart(prev => !prev); setGameOver(false); restore()}  }>
            {start && !gameOver?"Quit":"Start"}
        </button>
      </IonContent>
    </PageLayout>
  );
};

export default Level2;
