import Link from "next/link"
import { useState } from "react"

const Sidebar = ( {toggle, setToggle, appeals, student, overview} ) => {
    
    return (
        <div className= {toggle ? 'side-bar-container toggle-ham' : 'side-bar-container'}>
            
            <div className="side-bar top">
                <Link href='' >
                    <a className="side-bar-menu-item first-item sidebar-menu" onClick={()=> setToggle(!setToggle)}>
                    <img src="/images/Menu-icon.svg" alt=""  />
                        Menu
                    </a>
                </Link>
                <Link href='/school/dashboard' >
                    <a className={overview ? "side-bar-menu-item selected-menu" : "side-bar-menu-item"}>
                        <img src="/images/Over-view.svg" />
                        Overview
                    </a>
                </Link>
                <Link href='/school/students'>
                    <a className={student ? "side-bar-menu-item selected-menu" : "side-bar-menu-item"}>
                        <img src="/images/Profile.svg" />
                        Students
                    </a>
                </Link>
                <Link href='/school/appeals'>
                    <a className={appeals ? "side-bar-menu-item selected-menu" : 'side-bar-menu-item'}>
                        <img src="/images/appeal.svg" />
                        Appeals
                    </a>
                </Link>
            </div>
            <div className="side-bar bottom">
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <img src="/images/setting.svg" />
                        Settings
                    </a>
                </Link>
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <img src="/images/logout.svg" alt="" />
                        Logout
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar