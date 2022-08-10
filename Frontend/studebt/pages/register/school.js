
function School(props) {
    return (
        <main className="gencont">
            <div className="logodiv">
                <div className="logo-sec">
                    <img src="/logo-2.svg" alt="logo" />
                    <h1 className="whitecol">stuDEBT</h1>
                </div>
                <p className="lt-regular">
                    Sign up with the registered school's name and propietor's name
                </p>
            </div>
            <div className="form">
                <p className="msg001">
                    Already a partner? <a href="school_login.html"> Log in</a>
                </p>
                <div className="horule">
                    <hr className="one" />
                    <hr className="two" />
                    <hr className="Three" />
                </div>
                <h2 className="head0">Sign up as a partner</h2>
                <form action="#">
                    <div>
                        <label htmlFor="nschool">Name of School</label><br />
                        <input type="text" id="nschool" name="nschool" required />
                    </div>
                    <div>
                        <label htmlFor="semail">School Email Adress</label><br />
                        <input type="email" id="nschool" name="nschool" required />
                    </div>
                    <div>
                        <label htmlFor="npropietor">Name of Propietor</label><br />
                        <input type="text" id="npropietor" name="npropietor" required />
                    </div>
                    <button className="btn btn-sec btn-lag">
                        <a href="school_sign_up_2.html">Next</a>
                    </button>
                </form>
            </div>
        </main>
    );
}

export default School;