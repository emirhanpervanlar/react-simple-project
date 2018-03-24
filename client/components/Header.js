import React from 'react';
import {Link} from "react-router-dom";
export class Header extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center'}} >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/test">About</Link>
                    </li>
                </ul>
                <hr />
            </div>
        )
    }
}

export default Header;