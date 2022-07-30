import Navbar from './partials/navbar.js';
import Footer from './partials/footer.js';

export default function PageLayout({ children }) {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
    }



