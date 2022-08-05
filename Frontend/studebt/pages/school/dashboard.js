import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'
import Sidebar from '../../components/Sidebar';
import SchoolTopBar from '../../components/SchoolTopBar';
import SchoolMain from '../../components/SchoolMain';
import { useState } from 'react';


export default function Dashboard () {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='school-dashboard-layout'>
            <Sidebar toggle={toggle} setToggle={setToggle} />
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