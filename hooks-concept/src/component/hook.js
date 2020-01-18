import React,{useState} from 'react';

function Hook(){
//    const nameStateVariable = useState("Shilpi Tyagi");
//    const name = nameStateVariable[0];
//    const setName = nameStateVariable[1];
      const [name , setName] = useState('Shilpi tyagi')

  function handleEvent(){
       setName('Gaurav Tyagi')
   }

    return<React.Fragment>
        <h4>Name is:{name}</h4>
        <button className="btn btn-success" onClick={handleEvent}>Click me</button>
    </React.Fragment>
};

export default Hook;