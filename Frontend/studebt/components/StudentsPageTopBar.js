import React from 'react'

const StudentsPageTopBar = ({ setToggle}) => {
    function toggleHam() {
        setToggle(prevToggle => !prevToggle)
    }
    return (
        <div className='students-page-topbar'>
            <div className="school-menu-students-topbar-menuham" onClick={toggleHam}>
                <img src="/images/Menu-icon.svg" alt="" />
            </div>
            <div className="students-page-topbar-left">
                <input type="text" placeholder='Search' />
                <img src="/images/search.svg" alt="" />
            </div>
            <div className="students-page-topbar-right">
                <h5>Name of School</h5>
                <div className="students-page-topbar-right-icon notification">
                    <img src="/images/notification.png" alt="" />
                </div>
                
                <div className="students-page-topbar-right-icon profile-image">
                    <img src="/images/profile.png" alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default StudentsPageTopBar