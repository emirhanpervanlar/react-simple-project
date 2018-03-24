import React,{Component} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'
import AllFetchTest from './components/AllFetchTest'

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={AllFetchTest} />
                </div>
            </Router>
        )
    }
};



ReactDOM.render(<App/>,document.getElementById('root'));