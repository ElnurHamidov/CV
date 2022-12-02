import React from 'react';
import { IoIosSchool } from "react-icons/io";


class Education extends React.Component{


    render(){
        return(
            <div className="education">
                <div className="h5" style={{marginLeft: '5px',marginBottom: '30px', borderBottom: '1px solid #fff', paddingBottom: '10px'}}>Education</div>
                <div className='education-item'>
                    <div className='h4'><IoIosSchool />The Academy of Public Administration under the President of the Republic of Azerbaijan </div>
                    <p>Computer science</p>
                    <p>2015-2019</p>
                </div>
                <div className='education-item'>
                    <div className='h4'><IoIosSchool />The Azerbaijan National Academy of Sciences</div>
                    <p>Computer modelling</p>
                    <p>2019</p>
                </div>
            
            </div>
                
        );
    }
}

export default Education;