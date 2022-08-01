import Layout from '../../components/layout'
import PageLayout from '../../components/page-layout'

export default function Dashboard ( props ) {
    return (
        <>
           <h1>School Dashboard</h1>
        </>
    );
}


Dashboard.getLayout = function getLayout(page) {
    return ( 
      <Layout title="School Dashboard">
        <PageLayout>{page}</PageLayout>
      </Layout>
    )
  }