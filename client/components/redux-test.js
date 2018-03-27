import React from "react";
import {connect} from "react-redux";
import Main from "./Main"
import {fetchUsers} from "../redux/actions/userActions";

connect((store)=>{
    return{
        users:store.users.users
    }
})

class ReactTest extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchUsers())
    }

    render(){
        console.log(this.props.users);
        return(
            <Main>
                <div className="container">
                    {this.state.username}

                </div>
            </Main>
        )
    }
}
//
// const mapStateToProps = (state) =>{
//     return{
//         user: state.user,
//         math: state.math
//     };
// };
//
// const mapDispatchToProps =(dispatch) => {
//     return{
//         setName:(name)=>{
//             dispatch(setName(name));
//         }
//     };
// };
export default ReactTest;