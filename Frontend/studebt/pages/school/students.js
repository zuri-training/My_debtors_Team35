import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolMenuStudentsMain from '../../components/SchoolMenuStudentsMain';
import SchoolMenuStudentsTopBar from '../../components/SchoolMenuStudentsTopBar';
import { useState } from 'react';


export default function Dashboard ( props ) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='school-dashboard-layout'>
            <Sidebar toggle={toggle} setToggle={setToggle}/>
            <SchoolMenuStudentsTopBar setToggle={setToggle}/>
            <SchoolMenuStudentsMain />
        </div>
    );
}