import React from 'react';

class Profile extends React.Component{


    render(){

        return(
            <div className="profile">
                <div className="h5" style={{marginLeft: '5px',marginBottom: '30px', borderBottom: '1px solid #fff', paddingBottom: '10px'}}>Profile</div>
                <div className='profile-item'>Experienced working with teams to produce impactful, leading-edge websites that engage customers. Well-versed in design standards and user preferences.</div>
            </div>
        );
    }
}

export default Profile;