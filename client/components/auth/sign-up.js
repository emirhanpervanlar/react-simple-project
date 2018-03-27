import React, {Component} from 'react';
import Main from '../Main';
import axios from 'axios';
import * as Http from '../../utils/http.helper';

class UserSignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullName:'',
            email : '',
            password:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        Http.post('auth/sign-up',this.state).then(res=>{
            if(res.data[0].state){
                window.location = "http://www.google.com.tr/"
            }else{
                console.log(res);
            }

        });
    }

    render(){
        return(
            <Main>
                <div class="row justify-content-md-center">
                    <form className="col-lg-5" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label >İsim</label>
                            <input value={this.state.fullName} onChange={this.onChange} name="fullName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adınız ..."/>
                        </div>
                        <div className="form-group">
                            <label >Email</label>
                            <input value={this.state.email} onChange={this.onChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Emailiniz ..."/>
                        </div>
                        <div className="form-group">
                            <label>Şifre</label>
                            <input value={this.state.password} onChange={this.onChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Kayıt</button>
                    </form>
                </div>
            </Main>
        )
    }
}

export default UserSignUp;