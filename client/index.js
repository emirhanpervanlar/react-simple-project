import React,{Component} from "react";
import ReactDOM from 'react-dom';
import MainRoute from './routes/routes';
class App extends Component{
    render(){
        return(
            <MainRoute/>
        )
    }
};



ReactDOM.render(<App/>,document.getElementById('root'));