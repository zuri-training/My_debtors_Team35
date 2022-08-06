import React, {useState} from 'react'

const SchoolTopBar = ({ setToggle }) => {
    function toggleHam() {
        setToggle(prevToggle => !prevToggle)
    }
    return (
        <div className='school-topbar'>
            <img src="/images/Menu-icon.svg" alt="" id='menu-open' onClick={toggleHam}/>
            <div className="topbar-left">
                <h5>👋 Welcome to StuDebt</h5>
            </div>
            <div className="topbar-right">
                <h5>Name of School</h5>
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