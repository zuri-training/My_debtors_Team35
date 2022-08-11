function Student(props) {
    return (
        <main className="gencont">
            <div className="logodiv">
                <div className="logo-sec">
                    <img src="/logo-2.svg" alt="logo" />
                    <h1 className="blackcol">stuDEBT</h1>
                </div>
                <p className="lt-regular">
                    Signing up as a student, it is mandatory you sign up with your
                    registered National Identity Number (NIN)
                </p>
            </div>
            <div className="form">
                <p className="msg001 msg003">
                    Already a student? <a href="student_login.html"> Log in</a>
                </p>
                <h2 className="head0">Sign up as a student</h2>
                <form action="#">
                    <div>
                        <label htmlFor="nstdnt">Name of Student</label><br />
                        <input type="text" id="nstdnt" name="nstdnt" required />
                    </div>
                    <div>
                        <label htmlFor="stdnin">NIN</label><br />
                        <input type="number" id="stdnin" name="stdnin" required />
                    </div>
                    <div>
                        <label htmlFor="stdemail">Email Adress</label><br />
                        <input type="email" id="stdemail" name="stdemail" required />
                    </div>
                    <div>
                        <label htmlFor="stnphon">Phone Number</label><br />
                        <input type="number" id="stnphon" name="stnphon" />
                    </div>
                    <div>
                        <label htmlFor="sstdpaswd">Password</label><br />
                        <input type="password" id="sstdpaswd" name="sstdpaswd" required />
                    </div>
                    <button className="btn btn-sec btn-lag">Sign Up</button>
                </form>
            </div>
        </main>
    );
}

export default Student;