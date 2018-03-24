import React from 'react';
import Main from './Main';
import axios from 'axios';

class AllFetchTest extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            user : []
        }

    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        axios
            .post("http://localhost:3300/v1/auth/users")
            .then(res => this.setState({
                user : res.data,
                isLoading :false
            }))
    }


    render(){
        const userdata = this.state.user;
        const userlist = userdata.map(name=>{
            return(
                <li>{name.email}</li>
            )
        })
        return(
            <Main>
                {userlist}
            </Main>
        )
    }
}
export default AllFetchTest;