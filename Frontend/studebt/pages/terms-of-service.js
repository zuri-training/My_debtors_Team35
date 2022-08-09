import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/widgets/hero'
import HistorySection from '../components/about-us/historysection'
import FeatureSection from '../components/about-us/featuresection'
import OurStorySection from '../components/about-us/ourstorysection'
import OurGoalsSection from '../components/about-us/ourgoalssection'
import TeamSection from '../components/about-us/teamsection'



export default function TermsOfService(props) {
    return (
        <>
            <Hero
                title="About stuDEBT"
                subtitle="With stuDEBT, we are creating a platform to enable school administrators list out the name of debtors that currently owe the school and also to search if a particular student is a debtor before regsitering such student is another school."
            />    
            <OurStorySection />
            <OurGoalsSection />
            <FeatureSection />
            <TeamSection />
            <HistorySection />
        </>
    )
}

TermsOfService.getLayout = function getLayout(page) {
    return (
        <Layout title="About studebt">
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}