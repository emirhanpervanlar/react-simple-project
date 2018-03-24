import React,{Component} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'
import Test from './components/Test'

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                </div>
            </Router>
        )
    }
};



ReactDOM.render(<App/>,document.getElementById('root'));