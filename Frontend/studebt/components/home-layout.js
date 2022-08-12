import { useState } from 'react'
import HomeNavbar from './partials/home-navbar.js'
import HomeFooter from './partials/home-footer.js'
import LoginDialog from './widgets/login-dialog.js'
import SignupDialog from './widgets/signup-dialog.js'

export default function HomeLayout({ children, ...pageProps  }) {

    const [loginDialogVisible, setLoginDialogVisible] = useState(false)
    const [signupDialogVisible, setSignupDialogVisible] = useState(false)

    return (
        <>
        <HomeNavbar 
        loginDialogVisible={loginDialogVisible}
        signupDialogVisible={signupDialogVisible}
        setLoginDialogVisible={setLoginDialogVisible}
        setSignupDialogVisible={setSignupDialogVisible} 
        />
        <LoginDialog
            visible={loginDialogVisible}
            onHide={() => setLoginDialogVisible(false)}
        />
        <SignupDialog 
            visible={signupDialogVisible}
            onHide={() => setSignupDialogVisible(false)}
        />
        {children}
        <HomeFooter />
        </>
    );
}



