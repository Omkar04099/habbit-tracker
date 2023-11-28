import React from "react";
import styles from "../styles/weekview.module.css";
import Calender from "../pages/Calender";
import { useSelector } from "react-redux";

function WeekView(task) {
  const index = task.taskId;
  const habbits = useSelector((store) => store.habbits);
  const { status } = habbits[index];
  const date = new Date();
  const today = date.toLocaleDateString("en-GB");
  const days = [today];
  for (let i = 1; i < 6; i++) {
    let newDate = date.setDate(date.getDate() - 1);
    days.push(new Date(newDate).toLocaleDateString("en-GB"));
  }

  const count = [0, 1, 2, 3, 4, 5];

  return (
    <div className={styles.container}>
      {count.map((i) => (
        <Calender
          key={i}
          habbitId={index}
          index={i}
          date={days[i]}
          status={status[i]}
        />
      ))}
    </div>
  );
}

export default WeekView;
