import { useContext,createContext,useState,ReactNode } from 'react'
import incorrectSound from '../assets/sounds/incorrect.mp3'
import correctSound from '../assets/sounds/correct.mp3' 

interface GameContextType{
    highestScore:number,
    gameOver:boolean,
    setGameOver:(value: React.SetStateAction<boolean>|boolean) => void,
    chanceLeft:number,
    start:boolean,
    setStart:(value: React.SetStateAction<boolean>|boolean) => void,
    restore:() => void,
    submitHandler:(hourInput:number,minuteInput:number,hour:number,minute:number) => void,
    score:number
}

const  defaultContext:GameContextType = {
    highestScore:0,
    chanceLeft:3,
    gameOver:false,
    setGameOver:(value: React.SetStateAction<boolean>|boolean) => {},
    start:false,
    setStart:(value: React.SetStateAction<boolean>|boolean) => {},
    restore:() => {},
    submitHandler:(hourInput:number,minuteInput:number,hour:number,minute:number) => {},
    score:0
}

interface GameProviderProps{
    children:ReactNode
}

const GameContext = createContext<GameContextType>(defaultContext);

export const useGameContext = () => {
    return useContext(GameContext)
    // const context = useContext(SharedStateContext);

    // // Throw an error if used outside the provider
    // if (!context) {
    //   throw new Error('useSharedState must be used within a SharedStateProvider');
    // }
  
    // return context;
}


export const GameProvider:React.FC<GameProviderProps> = ({ children }) => {
    const [highestScore, setHighestScore] = useState<number>(0);
    const [gameOver,setGameOver] = useState<boolean>(false)
    const [start,setStart] = useState<boolean>(false);
    const [chanceLeft,setChanceLeft] = useState<number>(2);
    const [score,setScore] = useState<number>(0);

    const updateChance = (value:number) => {
        setChanceLeft(prev => prev + value);
    }

    const restore = () => {
        setChanceLeft(3);
        setScore(0);
    }
    
    const submitHandler = ( hourInput:number,minuteInput:number,hour:number,minute:number ) => {
          if(hour == hourInput && minute == (minuteInput/5==12?0:minuteInput/5)){
            new Audio(correctSound).play()
            setTimeout(()=>{
              setScore((prev: number) => { 
                  return prev + 10;
                });   
            },1000)

          }
          else{
            new Audio(incorrectSound).play()  
            chanceLeft > 1 ? updateChance(-1) : (() => { setGameOver(true); setStart(false);updateChance(-1);if(score > highestScore){
                setHighestScore(score);
            } })();
            // setScore(0);
            // setStart(false);
          }
        }

  return (
    <GameContext.Provider value = {{ highestScore,gameOver,setGameOver,start,setStart,chanceLeft,restore,submitHandler,score}}>
      {children}
    </GameContext.Provider>
  );
}