import React,{Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../components/Home';
import AllFetchTest from '../components/AllFetchTest' ;

class MainRoute extends Component{
    constructor(props){
        super(props);

    }
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
}

export default MainRoute;