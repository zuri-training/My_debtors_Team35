import { useState, useEffect } from 'react';
import { login } from './../../services/authService';
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Link from 'next/link';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

function Student(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // destruct props
    const { is_authenticated, is_student } = props;

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        NProgress.start();
        const data = {
            email,
            password,
        }
        await login(data).then(response => {
            if (response.access) {
                setCookie('token', response.access, { path: '/' });
                router.push('/student/dashboard');
            }
        }).catch(error => {
            alert(error)

        }).finally(() => {
            NProgress.done();
        })
    }

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
                    Not a student? <Link href="/register/student"><a> Sign up</a></Link>
                </p>
                <h2 className="head0">Log in to stuDebt</h2>
                <p className="welcomep">Log in to contend your debts</p>
                <form
                    onSubmit={handleSubmit}
                    action="#">
                    <div>
                        <label htmlFor="stdid">Email </label><br />
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="text" id="stdid" name="stdid" required />
                    </div>
                    <div>
                        <label htmlFor="stdpassword">Password</label><br />
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
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
                    <button type="submit" className="btn btn-sec btn-lag" >
                        Log in
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Student;

export const getServerSideProps = ({ req, res }) => {

let is_authenticated = false;
let token = getCookie('token', { req, res });

if (token) {
    is_authenticated = true;
}

if (is_authenticated) {
    return {
        redirect: {
            destination: '/student/dashboard',
            permanent: false,
        },
    }
}

return {
    props: {
        is_authenticated
    }
}

}

