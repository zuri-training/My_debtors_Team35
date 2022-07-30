import Image from 'next/image'

export default function Navbar( props ) {
    return (
        <nav>
            <a className="navbar-brand" href="/">
                <Image src="/studept-logo.jpg" alt="stuDept" width={200} height={200} />
            </a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/school/dashboard">School Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student/dashboard">Student Dashboard</a>
                    </li>
              
                </ul>
           </div>
        </nav>
    );
}

