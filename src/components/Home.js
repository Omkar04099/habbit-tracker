import { useSelector } from 'react-redux';
import styles from '../styles/home.module.css';
import Card from './Card';
import { useState } from 'react';
import AddHabbit from './AddHabbit';

function Home() {
    
    const habbits = useSelector((state)=>state.habbits);
    const [addHabbit, setAddHabbit] = useState(false);

    return (
      <div className='container'>
        <div className={styles.home}>
            <div className={styles.navContainer}>
                <div className='heading'>
                    <h1 id={styles.title}>Habbit Tracker</h1>
                </div>
                <div className='nav-options'>
                    <button className={styles.addHabbitBtn} onClick={()=>setAddHabbit(!addHabbit)}>
                        <img src='https://cdn-icons-png.flaticon.com/128/561/561169.png' height={30} width={30} alt='add' />
                        <p>Add Habbit</p>
                    </button>
                    {addHabbit && <AddHabbit />}
            </div>
            </div>
            <div className={styles.cardContainer}>
                {/* {title.map(x=><Card key={x.id} task={x.title}/>)} */}
                {/* {console.log(habbits)} */}
                {habbits.map((habbit)=><Card key={habbit.id} task={habbit}/>)}
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  