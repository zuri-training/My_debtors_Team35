import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolTopBar from '../../components/SchoolTopBar';
import SchoolMain from '../../components/SchoolMain';
import { useEffect, useState } from 'react';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { addDebtor } from './../../services/debtorsService';
import { getDebtors } from './../../services/debtorsService';
import { getSchoolProfile } from './../../services/profileService';


export default function Dashboard ( props ) {
    const [toggle, setToggle] = useState(false);
    const overview = true

    const [debtors, setDebtors] = useState([]);
    const [schoolProfile, setSchoolProfile] = useState({});

    useEffect(() => {
        getDebtors().then(data => {
            setDebtors(data);
        }).catch(error => {
            console.log(error)
        });

        getSchoolProfile().then(data => {
            setSchoolProfile(data);
        }).catch(error => {
            console.log(error)
        });

    } , []);

    return (
        <div className='school-dashboard-layout'>
            <div className={toggle ? "background-overlay" : "none"} onClick={() => setToggle(!toggle)} >
                
            </div>
            <Sidebar toggle={toggle} setToggle={setToggle} overview={overview} />
            <SchoolTopBar setToggle={setToggle}/>
            <SchoolMain />
        </div>
    );
}

// Dashboard.getLayout = function getLayout(page) {
//     return ( 
//       <Layout title="School Dashboard">
//         <PageLayout>{page}</PageLayout>
//       </Layout>
//     )
//   }



export const getServerSideProps = ({ req, res }) => {

    let is_authenticated = false;
    let token = getCookie('token', { req, res });

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