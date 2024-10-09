import React from 'react'
import { useLocation } from 'react-router';
import { IonButtons,IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { homeOutline } from 'ionicons/icons';


function PageLayout({pageTitle,children}) {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <IonPage className='layout-center'>
      <div className='main'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Back Button */}
            {location.pathname !== "/home" && <IonBackButton defaultHref="/home" icon={homeOutline} text="" /> }
          </IonButtons>
          <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {children}
      </div>
    </IonPage>
  )
}

export default PageLayout