import { useState, useEffect } from 'react';
import { login } from './../../services/authService';
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Link from 'next/link'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

function School(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { is_authenticated, is_school } = props;

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
                router.push('/school/dashboard')
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
                    <h1 className="whitecol">stuDEBT</h1>
                </div>
                <p className="lt-regular ltwht">
                    Login using your school ID to update your debtor&#39;s record and also
                    search for debtors
                </p>
            </div>
            <div className="form">
                <p className="msg001 msg002">
                    Not a partner? <Link href="/register/school"><a> Sign up</a></Link>
                </p>
                <h2 className="head0">Log in to stuDebt</h2>
                <p className="welcomep">Welcome back!</p>
                <form
                    onSubmit={handleSubmit}
                    action="#">
                    <div>
                        <label htmlFor="sid">School Email</label><br />
                        <input
                            type="text"
                            id="sid"
                            name="sid"
                            value={email}
                            required
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            required
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div>
                        <a className="fgtpswd" href="School_Forgot_Password_Email_1.html"
                        >Forgot Password?</a
                        >
                    </div>
                    <button type="submit" className="btn btn-sec btn-lag"  >
                        Log in
                    </button>
                </form>
            </div>
        </main>
    );
}

export default School;


export const getServerSideProps = ({ req, res }) => {

let is_authenticated = false;
let token = getCookie('token', { req, res });

if (token) {
    is_authenticated = true;
}

if (is_authenticated) {
    return {
        redirect: {
            destination: '/school/dashboard',
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
