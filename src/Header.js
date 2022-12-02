import React from 'react';
import logo from './images/photo.jpg';

class Header extends React.Component{

   

    render(){

        return(
            <div className="header">
                <div className="container">
                    <nav className="nav">
                    <img src={logo} className="d-inline-block align-left" alt="my photo" />
                        <div>
                            <div className="h2">Elnur Hamidov</div>
                            <div className="h3">Front end developer</div>
                        </div>                
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;