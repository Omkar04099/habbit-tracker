import React from "react";
import styles from "../styles/weekview.module.css";
import Calender from "../pages/Calender";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function WeekView() {
  const params = useParams();
  const index = parseInt(params.habbitId);
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
    <>
      <h1 className={styles.heading}>Week View</h1>
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
      <button className={styles.btn}>
        <Link style={{textDecoration:'none',color:'inherit'}} to='/'>
        Back to Home page
        </Link>
      </button>
    </>
  );
}

export default WeekView;
