import styles from '../styles/card.module.css';
import { useDispatch } from 'react-redux';
import WeekView from './WeekView';
import { useState } from 'react';
import { removeHabbit } from '../state/action-creators';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(heading) {   
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
    const handleClick = ()=> {
        setFlag(!flag);
    }
    const {id, title} = heading.task;

    const handleRemoveHabbit = (itemId) => {
        toast.warn('Habbit deleted successfully!',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch(removeHabbit(itemId));
      };
    
  return (
    <div className="Card">
        <div className={styles.container}>
            <div className={styles.textLogo} style={{alignItems:'center'}}>
                <img src='https://cdn-icons-png.flaticon.com/128/9434/9434493.png' width={30} height={30} alt='hash'/>
                <h3>{title}</h3>
            </div>
            <div className={styles.viewDelete}>
                <button onClick={handleClick}>
                    <img src='https://cdn-icons-png.flaticon.com/128/2838/2838779.png' width={30} height={30} alt='calender' />
                    &nbsp;Week View
                </button>
                <img src='https://cdn-icons-png.flaticon.com/128/6711/6711573.png' onClick={() => handleRemoveHabbit(id)} id={styles.delete} height={35} width={35} alt='delete'/>
            </div>
        </div>
        <div>
            {flag && <WeekView />}
        </div>
        <ToastContainer />
    </div>
  );
}

export default Card;
