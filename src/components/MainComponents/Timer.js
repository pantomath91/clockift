import React from 'react'

export default function Timer(props) {
    var value = props.value;
    const start = ()=>{
        setInterval(()=> {
            value++;
            console.log(value);
          }, 1000);
    }

    const resume = ()=>{
        clearInterval(start);
    }

    const stop = ()=>{
        value=0;
    }
    
    return (
        <div>
            <div>{value}</div>
            <button onClick={start}>Start</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}
