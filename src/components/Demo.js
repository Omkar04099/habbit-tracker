import React, { useState } from 'react'

const Demo = () => {
  const [arr, setArr] = useState([]);
  const fun = ()=>{
    fetch('https://dummy.restapiexample.com/api/v1/employees').then(res=>res.json()).then(obj=>{
    
        console.log(obj.data);
        setArr(obj.data);
    
    });   
    console.log(arr);
  }  
  

  return (
    <div onClick={fun}>Demo
        <div className='showData'>
            {arr.map(x=><h3 key={x.id}> {x.employee_name} </h3>)}
        </div>
    </div>
  )
}

export default Demo