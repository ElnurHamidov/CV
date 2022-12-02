import React from 'react';
import { AiFillPhone , AiFillLinkedin , AiFillGithub, AiFillFacebook} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";



class Contacts extends React.Component{


    render(){
        return(
            <div className="contacts">
                <div className="h5" style={{marginLeft: '5px',marginBottom: '30px', borderBottom: '1px solid #fff', paddingBottom: '10px'}}>Contact</div>
                <div className='contact-item'><AiFillPhone /> +994708221706</div>
                <div className="contact-item"><MdAlternateEmail /> gamidovelnur@mail.ru</div>
                <div className="contact-item"><AiFillLinkedin /> <a href="https://www.linkedin.com/in/elnur-hamidov-685737216/" target="_blank" rel="noopener noreferrer">linkedin.com/in/elnur-hamidov-685737216</a></div>
                <div className="contact-item"><AiFillGithub /> <a href="https://github.com/ElnurHamidov" target="_blank" rel="noopener noreferrer">https://github.com/ElnurHamidov</a></div>
                <div className="contact-item"><AiFillFacebook /> <a href="https://www.facebook.com/elnur.gamidov.54" target="_blank" rel="noopener noreferrer">Elnur Gamidov</a></div>
            </div>
            
        );
    }
}

export default Contacts;