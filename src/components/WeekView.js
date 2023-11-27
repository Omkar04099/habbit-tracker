import React from 'react';
import styles from '../styles/weekview.module.css';
import Calender from '../pages/Calender';

function WeekView() {

  const date = new Date();
  const today = date.toLocaleDateString('en-GB')
  const days = [today];
  for(let i=1; i<6; i++){
    let newDate = date.setDate(date.getDate() - 1);
    days.push(new Date(newDate).toLocaleDateString('en-GB'));
  }

  return (
        <div className={styles.container}>
            {days.map(day=><Calender key={day} date={day} />)}
        </div>
  )
}

export default WeekView;