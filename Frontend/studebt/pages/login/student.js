function Student(props) {
    return (
        <main className="gencont">
            <div className="logodiv">
                <div className="logo-sec">
                    <img src="/logo-2.svg" alt="logo" />
                    <h1 className="blackcol">stuDEBT</h1>
                </div>
                <p className="lt-regular">
                    Login as a student, with your National Identity Number (NIN) and
                    password
                </p>
            </div>
            <div className="form">
                <p className="msg001 msg002">
                    Not a student?<a href="student_sign_up.html"> Sig up</a>
                </p>
                <h2 className="head0">Log in to stuDebt</h2>
                <p className="welcomep">Log in to contend your debts</p>
                <form action="#">
                    <div>
                        <label htmlFor="stdid">NIN</label><br />
                        <input type="number" id="stdid" name="stdid" required />
                    </div>
                    <div>
                        <label htmlFor="stdpassword">Password</label><br />
                        <input
                            type="password"
                            id="stdpassword"
                            name="stdpassword"
                            required
                        />
                    </div>
                    <div>
                        <a className="fgtpswd" href="Student_Forgot_Password_Email_1.html"
                        >Forgot Password?</a
                        >
                    </div>
                    <button type="submit" className="btn btn-sec btn-lag" value="log in">
                        Log in
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Student;