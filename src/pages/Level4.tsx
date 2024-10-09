import React, {useState,useEffect} from 'react';
import { IonContent,IonButton,IonInput } from '@ionic/react';
import  './Level1.css';
import PageLayout from '../components/PageLayout';
import ColorBox from '../components/ColorBox';
import Clock from '../components/Clock'

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 12);
}

const Level4: React.FC = () => {
  const [hourBtn,setHourBtn] = useState(false)
  const [minuteBtn,setMinuteBtn] = useState(false)
  const [gameOver,setGameOver] = useState(false)
  const [start,setStart] = useState(false);
  const [score,setScore] = useState(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);  
  const [hourInput, setHourInput] = useState<number>(1);
  const [minuteInput, setMinuteInput] = useState<number>(7);

  const submitHandler = () => {
    if(hour == hourInput && minute == minute){
      setScore(prev => prev+10);
    }else{
      setGameOver(true)
      setScore(0);
      setStart(false)
    }
  }

  useEffect(()=>{
    setHour(generateRandomNumber()+1)
    setMinute(generateRandomNumber())
    setHourBtn(true);
    setMinuteBtn(false)
  },[score])
    const colors: string[] = [
      "color-7",
      "color-8",
      "color-1",   
      "color-10",
      "color-4",
      "color-2",
      "color-5",
      "color-12",
      "color-3",
      "color-6",
      "color-9",
      "color-11",
      
      ];
  return (
    <PageLayout pageTitle={"Level 4: Color Clock"}>  
      <div className='score-label text-white'>Score:{score}</div>
      <IonContent className="ion-padding"> 
      {gameOver ? <IonButton color="danger" size="large" >Game Over</IonButton>
        :<div className="layout-center">
          <div className='input-sub-container'>
            <IonInput
              className='input-box'
              type="text"
              value={hour}
              min="0"
              max="12"
              readonly={true}
            />
          </div>  
          <p className='text-white'>:</p>
          <div className='input-sub-container'>
            <IonInput
              className='input-box'
              type="text"
              value={minute*5}
              min="0"
              max="59"
              readonly={true}
            /> 
          </div>   
      </div>}
        <div className="layout-center colorbox-layout">
            {colors.map(color => <div key={color} onClick={()=> { hourBtn?setHourInput(parseInt(color.split('-')[1], 10)):setMinuteInput(parseInt(color.split('-')[1], 10)-1)}} className={`color-box ${color}`}></div>)}
        </div>
        {(start && !gameOver) && <><ColorBox size="large" hour={hourInput} minute={minuteInput}/>
        <div className='btnSetter'>
          <IonButton  shape="round" color={hourBtn?"primary":"medium"} onClick={()=>{ setMinuteBtn(false); setHourBtn(true) } }>set hour</IonButton>
          <IonButton   shape="round" color={minuteBtn?"primary":"medium"} onClick={()=>{ setHourBtn(false); setMinuteBtn(true) } }>set min</IonButton>
        </div>
        <IonButton expand="block" color="success" onClick={submitHandler}>
            Done
        </IonButton></>
        }
        <IonButton expand="block" color={(start && !gameOver)?"danger":"success"} onClick={ ( ) =>{ setStart(prev => !prev); setGameOver(false)}}>
              {(start && !gameOver)?"Quit":"Start"}
          </IonButton>
      </IonContent>
    </PageLayout>
  );
};

export default Level4;
