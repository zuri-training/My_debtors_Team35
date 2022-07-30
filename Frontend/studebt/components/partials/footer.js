// footer 

export default function Footer( props ) {
    return (
        <footer className="footer fixed bottom-0 left-0 w-full">
            <div className="text-center p-4">
            {/* copyright */}
          &copy; {new Date().getFullYear()} stuDept
            </div>
        </footer>
    );
}