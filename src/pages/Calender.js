import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { markAsDone, markAsNone, markAsUndone } from "../state/action-creators";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/weekview.module.css";

const Calender = (obj) => {
  const { habbitId, index, date, status } = obj;
  const [color, setColor] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState('');


  useEffect(()=>{
    switch (status) {
      case 'None':
        setColor2('lightSlateGrey')
        setColor('')
        setColor1('')
        break;
      case 'Done':
        setColor('green')
        setColor1('')
        setColor2('')
        break;
      case 'Undone':
        setColor('')
        setColor1('red')
        setColor2('')
        break;
      default:
        break;
    }
  },[status])

  
  const dispatch = useDispatch();
  let flag1 = false,
    flag2 = false,
    flag3 = false;

  const handleClick = (colour) => {
    switch (colour) {
      case "green":
        dispatch(markAsDone(habbitId,index));
        setColor(colour);
        setColor1("");
        setColor2("");
        if (flag1 === false) {
          toast.info("Habbit marked as done😃", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        flag1 = true;
        flag2 = false;
        flag3 = false;
        break;
      case "red":
        dispatch(markAsUndone(habbitId,index));
        setColor("");
        setColor1(colour);
        setColor2("");

        if (flag2 === false) {
          toast.info("Habbit marked as not-done🙁", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        flag1 = false;
        flag2 = true;
        flag3 = false;
        break;
      default:
        dispatch(markAsNone(habbitId,index));
        setColor("");
        setColor1("");
        setColor2(colour);

        if (flag3 === false) {
          toast.info("Habbit marked as none🤔", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        flag1 = false;
        flag2 = false;
        flag3 = true;
        break;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.date}>{date}</div>
      <div className={styles.action}>
        <i
          id={styles.i1}
          onClick={() => handleClick("green")}
          style={{ backgroundColor: color }}
          class="fa-solid fa-check"
        ></i>
        <i
          id={styles.i2}
          onClick={() => handleClick("red")}
          style={{ backgroundColor: color1 }}
          class="fa-solid fa-x"
        ></i>
        <i
          id={styles.i3}
          onClick={() => handleClick("lightSlateGrey")}
          style={{ backgroundColor: color2 }}
          class="fa-solid fa-minus"
        ></i>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Calender;
