import React from 'react';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

interface HeartDisplayProps {
  livesLeft: number; // Number of lives left (0 to 3)
}

const HeartDisplay: React.FC<HeartDisplayProps> = ({ livesLeft }) => {
  const maxLives = 3; // Maximum number of lives

  // Create an array of hearts, filled or outlined based on livesLeft
  const hearts = Array.from({ length: maxLives }, (_, i) =>
    i < livesLeft ? (
      <IonIcon key={i} icon={heart} color='danger'/>
    ) : (
      <IonIcon key={i} icon={heartOutline} color='danger'/>
    )
  );

  return <div>{hearts}</div>;
};

export default HeartDisplay;
