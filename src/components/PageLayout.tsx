import React from 'react'
import { useLocation } from 'react-router';
import { IonButtons,IonButton,IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react'
import { homeOutline,trophy } from 'ionicons/icons';
import { useGameContext } from '../gameContext/gameProvider';
import HeartDisplay from './HeartDisplay';




function PageLayout({pageTitle,children}:any) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { chanceLeft,highestScore,start,gameOver } = useGameContext();
  return (
    <IonPage className='layout-center'>
      <div className='main'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Back Button */}
            {location.pathname !== "/home" && <IonBackButton defaultHref="/home" icon={homeOutline} text="" /> }
          </IonButtons>         
          <IonTitle className='txt-lg'>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='life layout-center'>
       {(start && location.pathname !== "/home" ) && <HeartDisplay livesLeft={chanceLeft} />}
       {!start && <div slot="end" className="score">
         Highest : {highestScore}
        </div>}
      </div>
      {children}
      </div>
    </IonPage>
  )
}

export default PageLayout