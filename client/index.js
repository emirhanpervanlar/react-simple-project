import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Main from "./components/Main";
import Home from "./components/Home";
import Test from "./components/Test";
// import App from "./components/App";

export class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact path={"/"} component={Home} >
                    <Route path={"test"} component={Test} />
                </Route>
            </BrowserRouter>
        )
    }
}
asd

ReactDOM.render(<App/>,document.getElementById('root'));