import React from 'react'

const SchoolTopBar = () => {
    return (
        <div className='school-topbar'>
            <div className="topbar-left">
                <h4>Overview</h4>
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