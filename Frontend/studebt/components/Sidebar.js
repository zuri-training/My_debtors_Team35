import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
    return (
        <div className="side-bar-container">
            <div className="side-bar top">
                <Link href=''>
                    <a className="side-bar-menu-item first-item sidebar-menu">
                    <img src="/images/Menu-icon.svg" alt="" />
                        Menu
                    </a>
                </Link>
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <img src="/images/Over-view.svg" />
                        Overview
                    </a>
                </Link>
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <img src="/images/Profile.svg" />
                        Students
                    </a>
                </Link>
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <img src="/images/account.svg" />
                        Account
                    </a>
                </Link>
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <img src="/images/appeal.svg" />
                        Appeals
                    </a>
                </Link>
            </div>
            <div className="side-bar bottom">
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <FontAwesomeIcon icon="fa-solid fa-gear" className="icons" />
                        <img src="/images/setting.svg" />
                        Settings
                    </a>
                </Link>
                <Link href=''>
                    <a className="side-bar-menu-item">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                        Logout
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar