import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/widgets/hero'
import PrivacyPolicyContent from '../components/privacy-policy/privacy-policy-content'

export default function PrivacyPolicy(props) {
    return (
        <>
            <Hero
                title="You own your privacy."
                title2="We Protect it"
                subtitle="Document amended August 4th, 2022."
            />    
            <PrivacyPolicyContent />
        </>
    )
}

PrivacyPolicy.getLayout = function getLayout(page) {
    return (
        <Layout title="About studebt">
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}