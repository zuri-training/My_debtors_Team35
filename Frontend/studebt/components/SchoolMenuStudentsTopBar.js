import React, { useState } from 'react'

const SchoolMenuStudentsTopBar = ( { setToggle, page } ) => {
    function toggleHam() {
        setToggle(prevToggle => !prevToggle)
    }
    return (
        <div className='school-menu-students-topbar toggle-ham' >
            <div className="school-menu-students-topbar-menuham" onClick={toggleHam}>
                <img src="/images/Menu-icon.svg" alt="" />
            </div>
            <div className="menu-students-topbar-left">
                <h4>{page}</h4>
            </div>
            <div className="menu-students-topbar-right">
                <div className="menu-students-topbar-search-container">
                    <input type="text" placeholder='Search' />
                    <img src="/images/search.svg" alt="" />
                </div>
                <div className="menu-students-topbar-add-debtors">
                    <img src="/images/Plus.png" alt="" />
                </div>
                <div className="menu-students-topbar-notification">
                    <img src="/images/notification.png" alt="" />
                </div>
                <div className="menu-students-topbar-profile-img">
                    <img src="/images/profile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SchoolMenuStudentsTopBar