import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux';


const Counter = () => {
  const [ count, setCount ] = useState('');

  const [ incramentor, setIncramentor ] = useState('');


const incrament = () => {
    setCount(count+(incramentor * 1))
}

const decrement = () => {
    if(count - (incramentor * 1) < 0){
        alert('cant go below 0')
    }
    else {

        setCount(count- (incramentor * 1))
    }
}


const resetCount = () => {
    setCount(0)
    setIncramentor(1)
}



useEffect(() => {
  setCount(0)
  setIncramentor(1)
}, []);

useEffect(() => {
}, [count, incramentor])

    return (
        <div>
            <h3> Count:{count} </h3>
            <div>
                <button onClick={incrament}> + </button>
                <button onClick={decrement}> - </button>
                <button onClick={resetCount}> Reset </button> 
            </div>
            <div>
                <label> Set incrament # </label>
                <input value={incramentor} onChange={(e) => setIncramentor(e.target.value)} type="number" />
            </div>
        </div>
    )
};

const mapState = (state) => {
    return state
}

export default connect (mapState)(Counter)