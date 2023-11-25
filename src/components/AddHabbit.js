import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHabbit } from '../state/action-creators';
import Model from 'react-modal';
import styles from '../styles/addhabbit.module.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddHabbit = () => {
  const [habbit, setHabbit] = useState('');
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const handleAddHabbit = (e) => {
    setHabbit(e.target.value)
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(habbit===''){
        // alert('Please enter a habbit!');
        toast.error('Please enter a habbit!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    else{
    const newItem = { id: Date.now(), title: habbit };
    dispatch(addHabbit(newItem));
    setHabbit('');
    toast.success('New habbit added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  return (
    <div>
        <Model isOpen={visible} onRequestClose={()=>setVisible(false)} style={{content:{margin:'auto',width:'32vw',height:'32vh',background:'lightSlateGrey',color:'black'}}}>
        <form>
            <h2>Add a habbit</h2>
            <input type='text' id='habbit' placeholder='Go For A Jog...' value={habbit} onChange={handleAddHabbit} />
            <button onClick={handleSubmit} className={styles.btn}>Submit</button>
        </form>
        <ToastContainer />
        </Model>
    </div>
  )
}

export default AddHabbit