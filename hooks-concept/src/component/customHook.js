import {useState} from 'react';

function CustomHook(){

    const [name , setName] = useState(0);

    const handleName=()=>{
        setName(name + 1)
    }

    return{
        name,
        handleName
    }
}

export default CustomHook;