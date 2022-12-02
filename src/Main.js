import React from 'react';
import Contacts from './Contacts';
import Education from './Education';

class Main extends React.Component{

    render(){
        return(
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Contacts />
                        </div>
                        <div className="col-md-8">
                            <Education />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;