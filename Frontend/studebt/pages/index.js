import { useState } from 'react'
import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/home/hero'
import HistorySection from '../components/home/historysection'
import FeatureSection from '../components/home/featuresection'
import DashboardOneSection from '../components/home/dashboardonesection'
import DashboardTwoSection from '../components/home/dashboardtwosection'
import CustomerReviews from '../components/home/customerreviews'
import Newslettter from '../components/home/newsletter'
import LoginDialog from '../components/widgets/login-dialog.js'
import SignupDialog from '../components/widgets/signup-dialog.js'

export default function Home(props) {

  const [loginDialogVisible, setLoginDialogVisible] = useState(false)
  const [signupDialogVisible, setSignupDialogVisible] = useState(false)

  return (
    <>
      <LoginDialog
        visible={loginDialogVisible}
        onHide={() => setLoginDialogVisible(false)}
      />
      <SignupDialog
        visible={signupDialogVisible}
        onHide={() => setSignupDialogVisible(false)}
      />
      <Hero
        loginDialogVisible={loginDialogVisible}
        signupDialogVisible={signupDialogVisible}
        setLoginDialogVisible={setLoginDialogVisible}
        setSignupDialogVisible={setSignupDialogVisible}
      />
      <HistorySection />
      <FeatureSection />
      <DashboardOneSection />
      <DashboardTwoSection />
      <CustomerReviews />
      <Newslettter />
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