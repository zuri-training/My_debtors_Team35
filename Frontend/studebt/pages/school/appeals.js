import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolMenuAppealsMain from '../../components/SchoolMenuAppealsMain';
import SchoolMenuStudentsTopBar from '../../components/SchoolMenuStudentsTopBar';
import { useState } from 'react';


export default function Dashboard ( props ) {
    const [toggle, setToggle] = useState(false)
    const appeals = true
    return (
        <div className='school-dashboard-layout'>
            <div className={toggle ? "background-overlay" : "none"} onClick={() => setToggle(!toggle)} >
                
            </div>
            <Sidebar toggle={toggle} setToggle={setToggle} appeals={appeals}/>
            <SchoolMenuStudentsTopBar setToggle={setToggle} />
            <SchoolMenuAppealsMain />
        </div>
    );
}