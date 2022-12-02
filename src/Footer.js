import React from 'react';

export default class Footer extends React.Component{


    render(){
        return(
            <div className="footer">
                <footer className="text-center text-white" style={{backgroundColor: "rgba(0, 0, 0, .7)"}}>
                    <div className="container p-4"></div>
                    <div className="text-center p-3" style={{ color: '#fff'}}>
                        <p>Open to job offers as a junior front end developer</p>
                    </div>
                </footer>
            </div>
        );
    }
}