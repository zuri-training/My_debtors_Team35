import Image from 'next/image'
import Link from 'next/link'

export default function HomeNavbar( props ) {
    return (
        <nav>
            <Link href="/">
            <a className="navbar-brand" >
                <Image src="/studept-logo.jpg" alt="stuDept" width={200} height={200} />
            </a>
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link href="/">
                        <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/school/dashboard">
                        <a className="nav-link" >Circular</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/school/students">
                        <a className="nav-link">FAQs</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/student/dashboard">
                        <a className="nav-link">Contact Us</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/student/dashboard">
                        <a className="nav-link">
                            <button className="btn btn-primary">Login</button>
                        </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/student/dashboard">
                        <a className="nav-link">
                            <button className="btn btn-primary">Sign Up</button>
                        </a>
                        </Link>
                    </li>
              
                </ul>
           </div>
        </nav>
    );
}

