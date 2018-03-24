import React,{Component,Children} from 'react';


class Parent extends Component{
    render(){
        return(
            <div>
                Total Children : {Children.count(this.props.children)}
                {this.props.children}
            </div>
        )
    }
}

export default Parent;