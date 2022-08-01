import Image from 'next/image'
import Link from 'next/link'

export default function Navbar( props ) {
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
                        <a className="nav-link" >Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/school/dashboard">
                        <a className="nav-link" >School Dashboard</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/school/students">
                        <a className="nav-link">Student Dashboard</a>
                        </Link>
                    </li>
              
                </ul>
           </div>
        </nav>
    );
}

