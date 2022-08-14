import React, { useState, useEffect } from 'react'
import { getSchoolProfile } from '../services/profileService'
import NProgress from 'nprogress'

const SchoolTopBar = ({ setToggle }) => {

    const [schoolProfile, setSchoolProfile] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        NProgress.start();
        getSchoolProfile().then(data => {
            setSchoolProfile(data.school_profile);
            setUser(data.user);
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }).finally(() => {
            NProgress.done();
        } )
    }, []);

    function toggleHam() {
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <div className='school-topbar'>
            <div className="school-menu-side-menu-hamburger" onClick={toggleHam}>
                <img src="/images/Menu-icon.svg" alt="" id='menu-open' />
            </div>
            <div className="topbar-left">
                <h5>👋 Welcome to StuDebt</h5>
            </div>
            <div className="topbar-right">
                <h5>{schoolProfile.school_name ? schoolProfile.school_name : "" }</h5>
                <div className="notification">
                    <img src="/images/notification.png" alt="" />
                </div>
                <div className="profile-image">
                    <img src="/images/school-pic.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SchoolTopBar