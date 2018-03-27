import React from "react";
import {connect} from "react-redux";
import Main from "./Main"
import {setName} from "../redux/actions/userActions";



class ReactTest extends React.Component{
    constructor(){
        super();
        this.state={
            username : "ahmet"
        }
    }
    changeUsername(newName){
        this.setState({
            username : newName
        })
    }
    render(){
        return(
            <Main>
                <div className="container">
                    {this.state.username}

                    <button type="button" onClick={this.changeUsername.bind(this)}>Tıkla</button>
                </div>
            </Main>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps =(dispatch) => {
    return{
        setName:(name)=>{
            dispatch(setName(name));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ReactTest);