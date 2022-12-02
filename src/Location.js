import React from 'react';
import { MdLocationOn } from "react-icons/md";



export default class Location extends React.Component{

    render(){
        return(
            <div className="location">
               <div className="h5" style={{marginLeft: '5px',marginBottom: '30px', borderBottom: '1px solid #fff', paddingBottom: '10px'}}>Location</div>
               <div className="location-item"><p><MdLocationOn /> Baku, Azerbaijan</p></div>
            </div>
        );
    }
}