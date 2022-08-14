import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolMenuStudentsMain from '../../components/SchoolMenuStudentsMain';
import StudentsPageTopBar from '../../components/StudentsPageTopBar';
import { useState } from 'react';

export default function Dashboard ( props ) {
    const [toggle, setToggle] = useState(false)
    const student = true
    return (
        <div className='school-dashboard-layout'>
            <div className={toggle ? "background-overlay" : "none"} onClick={() => setToggle(!toggle)}>
                
            </div>
            <Sidebar toggle={toggle} setToggle={setToggle} student={student}/>
            <StudentsPageTopBar setToggle={setToggle} />
            <SchoolMenuStudentsMain />
        </div>
    );
}

export const getServerSideProps = ({ req, res }) => {
    const cookies = req.headers.cookie;
    let is_authenticated = false;

    if (cookies) {
        const parsedCookies = cookies.split(';').map(cookie => cookie.split('='));
        const parsedCookiesObj = {};
        parsedCookies.forEach(cookie => {
            parsedCookiesObj[cookie[0].trim()] = cookie[1];
        });
        if (parsedCookiesObj.token) {
            is_authenticated = true;
        }
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