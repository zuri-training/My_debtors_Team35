import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolMenuStudentsMain from '../../components/SchoolMenuStudentsMain';
import StudentsPageTopBar from '../../components/StudentsPageTopBar';
import { useState } from 'react';


export default function Dashboard ( props ) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='school-dashboard-layout'>
            <div className={toggle ? "background-overlay" : "none"} onClick={() => setToggle(!toggle)}>
                
            </div>
            <Sidebar toggle={toggle} setToggle={setToggle}/>
            <StudentsPageTopBar setToggle={setToggle} />
            <SchoolMenuStudentsMain />
        </div>
    );
}