import styles from '../styles/card.module.css';


function Card(data) {   
    // console.log(data)

  return (
    <div className="Card">
        <div className={styles.container}>
            <div className={styles.textLogo} style={{alignItems:'center'}}>
                <img src='https://cdn-icons-png.flaticon.com/128/9434/9434493.png' width={30} height={30} alt='hash'/>
                <h3>Go to gym</h3>
            </div>
            <div className={styles.viewDelete}>
                <button>
                    <img src='https://cdn-icons-png.flaticon.com/128/2838/2838779.png' width={30} height={30} alt='calender' />
                    &nbsp;Week view
                </button>
                <img src='https://cdn-icons-png.flaticon.com/128/6711/6711573.png' height={35} width={35} alt='delete'/>
            </div>
        </div>
    </div>
  );
}

export default Card;
