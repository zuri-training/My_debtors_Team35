import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolMenuStudentsMain from '../../components/SchoolMenuStudentsMain';
import SchoolMenuStudentsTopBar from '../../components/SchoolMenuStudentsTopBar';


export default function Dashboard ( props ) {
    return (
        <div className='school-dashboard-layout'>
            <Sidebar />
            <SchoolMenuStudentsTopBar />
            <SchoolMenuStudentsMain />
        </div>
    );
}