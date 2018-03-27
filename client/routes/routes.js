import React,{Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../components/Home';
import AllFetchTest from '../components/AllFetchTest' ;
import UserSignUp from '../components/auth/sign-up';
import ReduxTest from '../components/redux-test'

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
                        <Route path="/üye-kaydi" component={UserSignUp} />
                        <Route path="/react-test" component={ReduxTest} />
                    </div>
                </Router>
        )
    }
}

export default MainRoute;