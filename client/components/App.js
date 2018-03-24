import React,{Component} from 'react';
import Parent from './Parent'
export class App extends Component{
    render(){
        return(
            <div style={{textAlign: 'center'}} >
                <Parent>
                    Parent children
                </Parent>
            </div>
        )
    }
}

export default App;