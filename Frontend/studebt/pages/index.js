import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'

export default function Home( props ) {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout title="Home">
      <HomeLayout>{page}</HomeLayout>
    </Layout>
  )
}