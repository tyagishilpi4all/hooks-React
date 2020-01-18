import React,{useState,useEffect} from 'react';
import CustomHook from '../component/customHook'

function Hook1(){
    const [count,setCount]=useState(0);
    const [down , setdown]=useState(50);
    const data = CustomHook();

    // const handleCount=()=>{
    //     setCount(count + 1);
    // }

    const handleDown=()=>{
        setdown(down - 1);
    }

    useEffect(()=>{
           console.log('updated content')
    },[count])

    return<React.Fragment>
       <h4>Count up:{data.name}</h4>
       <button className="btn btn-info" onClick={data.handleName}>Increment</button>

       <h4 className="mt-5">Count down:{down}</h4>
       <button className="btn btn-info" onClick={handleDown}>Decrement</button>
    </React.Fragment>
};

export default Hook1;
