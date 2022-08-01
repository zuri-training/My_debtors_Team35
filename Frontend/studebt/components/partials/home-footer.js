import Image from 'next/image'
import Link from 'next/link'

export default function HomeFooter( props ) {
    return (
        <footer className="footer fixed bottom-0 left-0 w-full">
            {/* footer menu */}
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                        <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/school/dashboard">
                        <a >School Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/student/dashboard">
                        <a>Student Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/student/dashboard">
                        <a>Community</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/student/dashboard">
                        <a>Business</a>
                        </Link>
                    </li>

                </ul>
            </nav>
            <div className="text-center p-4">
            {/* copyright */}
          &copy; {new Date().getFullYear()} stuDept
            </div>
        </footer>
    );
}