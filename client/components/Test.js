import React from 'react';
import Main from './Main';
import axios from 'axios';

class Test extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mail:null
        }
        axios
            .post("http://localhost:3300/v1/auth/users")
            .then(res=>{
                this.setState({
                    mail:res.data[1].email
                })
            })
    }


    render(){
        return(
            <Main>
                <h3>Test page Email : {this.state.mail}</h3>
            </Main>
        )
    }
}
export default Test;