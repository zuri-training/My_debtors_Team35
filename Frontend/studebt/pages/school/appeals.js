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

export const getServerSideProps = ({ req, res }) => {
    let is_authenticated = false;
    // get token from local storage

    const token = localStorage.getItem('token');
    if (token) {
        is_authenticated = true;
    }

    if (!is_authenticated) {
        return {
          redirect: {
            destination: '/login/school',
            permanent: false,
          },
        }
      }

    return {
        props: {
            is_authenticated
        }
    }

}