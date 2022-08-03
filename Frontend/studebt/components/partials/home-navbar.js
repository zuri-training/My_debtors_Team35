import { Menubar } from 'primereact/menubar'
import Link from 'next/link'
import { Button } from 'primereact/button'

function HomeNavbar(props) {
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
            url: '/circular'
        },
        {
            label: 'Contact Us',
            url: '/contact-us'
        },
        // login button
        {
           label: <Button label="Log In" className="p-button-raised" />,
           url: '/login'
            
        },
        // register button
        {
            label: <Button label="Sign up" className="p-button-outlined" />,
            url: '/register'
        }

    ];

    const logo = <Link href='/'><a className='no-underline'>
        <div><h1 className='text-900'>StuDebt</h1></div></a>
    </Link>;

    return (
        <nav>
            <Menubar className="px-7 flex justify-content-between border-none" model={items} start={logo} />
        </nav>
    );
}

export default HomeNavbar;