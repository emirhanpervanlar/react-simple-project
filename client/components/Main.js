import React,{Component} from 'react';
import Header from './Header';
export class Main extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;