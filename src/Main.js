import React from 'react';
import Contacts from './Contacts';
import Education from './Education';
import Skills from './Skills';
import Profile from './Profile';
import Languages from './Languages';
import Location from './Location';
import Experience from './Experience';

class Main extends React.Component{

    render(){
        return(
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                             <Skills />      
                            <Experience />                                                 
                            <Languages />  
                        </div>
                        <div className="col-md-5  part2">
                            <Education />
                            <Profile /> 
                            <Location />      
                            <Contacts />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;