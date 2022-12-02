import React from 'react';
import { FaLanguage } from "react-icons/fa";
import { BsCircleFill, BsCircle } from "react-icons/bs"


class Languages extends React.Component{


    render(){
        return(
            <div className="languages">
                <div className="h5" style={{marginLeft: '5px',marginBottom: '30px', borderBottom: '1px solid #fff', paddingBottom: '10px'}}><FaLanguage /> Language</div>
                <div className="languages-item"><p>Azerbaijani - fluent</p><BsCircleFill style={{marginLeft: '5px'}}/> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /></div>
                <div className="languages-item"><p>Russian - fluent </p><BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /></div>
                <div className="languages-item"><p>English - intermediate </p><BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircle /> <BsCircle /></div>
            </div>
        );
    }
}

export default Languages;