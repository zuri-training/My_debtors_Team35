import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/circular/hero'
import Article from '../components/circular/article'
import FAQ from '../components/circular/faq'

export default function Circular(props) {
    return (
        <>
            <Hero
                title="LATEST POST"
                subtitle="3rd August, 2022."
            /> 
            <Article /> 
            <FAQ />
        </>
    )
}

Circular.getLayout = function getLayout(page) {
    return (
        <Layout title="About studebt">
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}