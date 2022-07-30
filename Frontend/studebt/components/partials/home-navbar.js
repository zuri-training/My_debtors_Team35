import Image from 'next/image'

export default function HomeNavbar( props ) {
    return (
        <nav>
            <a className="navbar-brand" href="#">
                <Image src="/studept-logo.jpg" alt="stuDept" width={200} height={200} />
            </a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/school/dashboard">Circular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student/dashboard">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student/dashboard">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student/dashboard">
                            <button className="btn btn-primary">Login</button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student/dashboard">
                            <button className="btn btn-primary">Sign Up</button>
                        </a>
                    </li>
              
                </ul>
           </div>
        </nav>
    );
}

