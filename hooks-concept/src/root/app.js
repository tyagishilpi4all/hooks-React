import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hook from '../component/hook';
import Hook1 from  '../component/useEffect';

class App extends Component{

    render(){
        return(
            <React.Fragment>
                <h1 className="hook">Hooks Concept</h1>
                 <div className="col-md-12 mx-auto mt-5">
                    <div className="row">
                        <div className="col-md-6">
                         <h5 className="hook mb-4">useState</h5>
                          <Hook />
                        </div>
                        <div className="col-md-6">
                             <h5 className="hook mb-4">useEffect</h5>
                             <Hook1 />
                        </div>
                    </div>
                 </div>
                <style jsx="true">
                    {
                        `.hook{
                            text-align:center;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default App;
