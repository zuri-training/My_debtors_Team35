import { Menubar } from 'primereact/menubar'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { Image } from 'primereact/image'

function HomeNavbar(props) {
    const { loginDialogVisible, signupDialogVisible, setLoginDialogVisible, setSignupDialogVisible } = props    

    const items = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Circular',
            url: '/circular'
        },
        {
            label: 'FAQ\'s',
            url: '/frequently-asked-questions'
        },
        {
            label: 'Contact Us',
            url: '/contact-us'
        },
        // login button
        {
            label: <Button 
            onClick={(e) => {
                e.preventDefault()
                setLoginDialogVisible(!loginDialogVisible)
            } }     
            label="Log In" className="p-button-primary p-button-raised" />,
            url: '/login'

        },
        // register button
        {
            label: <Button 
            onClick={(e) => {
                e.preventDefault()
                setSignupDialogVisible(!signupDialogVisible)
            } }
            
            label="Sign up" className="p-button-outlined" />,
            url: '/register'
        }

    ];

    const logo = <Link href="/">
        <a className="navbar-brand" >
            <Image src="/studebt-logo.png" alt="stuDept" width={200} />
        </a>
    </Link>;

    return (
        <nav>
            <Menubar className="px-7 flex justify-content-between border-none" model={items} start={logo} />
        </nav>
    );
}

export default HomeNavbar;