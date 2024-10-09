import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Home.css';
import PageLayout from '../components/PageLayout';

const Home: React.FC = () => {
  return (
    <PageLayout pageTitle={"Select Level"}>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-margin-vertical">
            <IonCol size="6" size-md="6">
              <IonButton shape="round"  routerLink="/level1">
                Level 1
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-vertical">
            <IonCol size="6" size-md="6">
              <IonButton shape="round" color="success" routerLink="/level2">
                Level 2
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-vertical">
            <IonCol size="6" size-md="6">
              <IonButton shape="round" color="warning" routerLink="/level3">
                Level 3
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-vertical">
            <IonCol size="6" size-md="6">
              <IonButton shape="round" color="danger" routerLink="/level4">
                Level 4
              </IonButton>
            </IonCol>
          </IonRow>
          {/* <IonRow className="ion-justify-content-center ion-margin-vertical">
            <IonCol size="6" size-md="6">
              <IonButton shape="round" color="danger" routerLink="/level5">
                Level 5
              </IonButton>
            </IonCol>
          </IonRow> */}
        </IonGrid>
      </IonContent>
      </PageLayout>
  );
};

export default Home;

