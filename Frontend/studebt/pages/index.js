import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/home/hero'

export default function Home( props ) {
  return (
    <>
      <Hero />
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