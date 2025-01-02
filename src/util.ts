import incorrectSound from './assets/sounds/incorrect.mp3'
import correctSound from './assets/sounds/correct.mp3'
import { useGameContext } from './gameContext/gameProvider';

export const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 12);
}

// export const submitHandler = (hour:number,hourInput:number,minute:number,minuteInput:number,setScore:(value: React.SetStateAction<number>) => void,):any => {
  
//   const { setGameOver, setStart,updateChance,chanceLeft } = useGameContext();

//   console.log(` ${hour} == ${hourInput} >> ${ minute } == ${minuteInput/5}`)
//     if(hour == hourInput && minute == minuteInput/5){
//       new Audio(correctSound).play()
//       setTimeout(()=>{
//         setScore((prev: number) => { 
//             return prev + 10;
//           }); 
//       },1000)
      
//     }
//     else{
//       new Audio(incorrectSound).play()  
//       chanceLeft > 0 ? updateChance(-1) :setGameOver(true)
//       setScore(0);
//       setStart(false);
//     }
//   }