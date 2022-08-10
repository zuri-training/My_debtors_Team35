import { useState } from "react";

function School(props) {
    const [schoolId, setSchoolId] = useState("");
    const [password, setPassword] = useState("");


    const login = async () => {
        console.log(schoolId, password)
        let item = {schoolId, password}
        let result = await fetch("https://",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.Json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.pushState('/school/dashboard');
    }
    return (
        <main className="gencont">
            <div className="logodiv">
                <div className="logo-sec">
                    <img src="/logo-2.svg" alt="logo" />
                    <h1 className="whitecol">stuDEBT</h1>
                </div>
                <p className="lt-regular ltwht">
                    Login using your school ID to update your debtor's record and also
                    search for debtors
                </p>
            </div>
            <div className="form">
                <p className="msg001 msg002">
                    Not a partner? <a href="school_sign_up_1.html"> Sign up</a>
                </p>
                <h2 className="head0">Log in to stuDebt</h2>
                <p className="welcomep">Welcome back!</p>
                <form action="#">
                    <div>
                        <label htmlFor="sid">School ID</label><br />
                        <input 
                            type="text" 
                            id="sid" 
                            name="sid" 
                            required 
                            onChange={(e)=>{setSchoolId(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />
                    </div>
                    <div>
                        <a className="fgtpswd" href="School_Forgot_Password_Email_1.html"
                        >Forgot Password?</a
                        >
                    </div>
                    <button type="submit" className="btn btn-sec btn-lag" value="log in" 
                        onClick={login}
                        >
                        Log in
                    </button>
                </form>
            </div>
        </main>
    );
}

export default School;