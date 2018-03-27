import React,{Component} from 'react';
import Header from './Header';

export class Main extends Component{
    constructor(props){
        super(props);
        this.store = this.props.store;
    }



    render(){

        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Header/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;