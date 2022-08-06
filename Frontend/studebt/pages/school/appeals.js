import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolMenuAppealsMain from '../../components/SchoolMenuAppealsMain';
import SchoolMenuStudentsTopBar from '../../components/SchoolMenuStudentsTopBar';


export default function Dashboard ( props ) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='school-dashboard-layout'>
            <Sidebar toggle={toggle} setToggle={setToggle}/>
            <SchoolMenuStudentsTopBar setToggle={setToggle}/>
            <SchoolMenuAppealsMain />
        </div>
    );
}