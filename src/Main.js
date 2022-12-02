import React from 'react';
import Contacts from './Contacts';
import Education from './Education';
import Skills from './Skills';
import Profile from './Profile';

class Main extends React.Component{

    render(){
        return(
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Contacts />
                            <Skills />
                        </div>
                        <div className="col-md-5" style={{marginLeft: '250px'}}>
                            <Education />
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;