import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/faq/hero'
import FAQ from '../components/faq/faq'
import Contact from '../components/faq/contact'

export default function Faq(props) {
    return (
        <>
            <Hero
                title="Ask us anything"
                subtitle="Bothered about anything? We’re here to help you."
            />    
            <FAQ />
            <Contact />
        </>
    )
}

Faq.getLayout = function getLayout(page) {
    return (
        <Layout title="Faq">
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}