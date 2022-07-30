// footer 

export default function HomeFooter( props ) {
    return (
        <footer className="footer fixed bottom-0 left-0 w-full">
            {/* footer menu */}
            <nav>
                <ul>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/school/dashboard">School Dashboard</a>
                    </li>
                    <li>
                        <a href="/student/dashboard">Student Dashboard</a>
                    </li>
                    <li>
                        <a href="/school/dashboard">Community</a>
                    </li>
                    <li>
                        <a href="/student/dashboard">Business</a>
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