import styles from '../styles/home.module.css';
import Card from './Card';
import { useEffect, useState } from 'react';

function Home() {

    const [title, setTitle] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
        let array = []
        const data = await fetch('https://mocki.io/v1/626a1555-da1c-40c6-8dc4-e44e3de8ed07').then(res=>res.json()).then()
        for(let i of data){
            array.push(i.title);
        }
        console.log(data)
        const [arr] = data;
        // console.log(arr.title)
        setTitle(array);
    }
    getData();
},[])

    return (
      <div className='container'>
        <div className={styles.home}>
            <div className={styles.navContainer}>
                <div className='heading'>
                    <h1 id={styles.title}>Habbit Tracker</h1>
                </div>
                <div className='nav-options'>
                    <button className={styles.addHabbitBtn}>
                        <img src='https://cdn-icons-png.flaticon.com/128/561/561169.png' height={30} width={30} alt='add' />
                        <p>Add Habbit</p>
                    </button>
            </div>
            </div>
            <div className={styles.cardContainer}>
                <Card data={title}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  