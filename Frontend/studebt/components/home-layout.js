import HomeNavbar from './partials/home-navbar.js';
import HomeFooter from './partials/home-footer.js';

export default function HomeLayout({ children }) {
    return (
        <>
        <HomeNavbar />
        {children}
        <HomeFooter />
        </>
    );
}



