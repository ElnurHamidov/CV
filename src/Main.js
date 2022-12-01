import React from 'react';
import Contacts from './Contacts';

class Main extends React.Component{

    render(){
        return(
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Contacts />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;