import { useState, useEffect } from 'react';
import { register } from './../../services/authService';
import { useRouter } from 'next/router'
import  NProgress from 'nprogress'
import Link from 'next/link';

function Student(props) {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [nin, setNin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [phone, setPhone] = useState('')
    const [profile, setProfile] = useState({})

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        NProgress.start();
        const data = {
            first_name,
            last_name,
            nin,
            email,
            password,
            password2,
            profile,
            phone,
            is_school: false,
            is_student: true
        }
        await register(data).then(response => {
            console.log(response)
        }).catch(error => {
                alert(error)
        }).finally(() => {
            router.push('/login/student')
            NProgress.done();
        } )
    }
        

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
                    Already a student? <Link href="/login/student"><a> Log in</a></Link>
                </p>
                <h2 className="head0">Sign up as a student</h2>
                <form 
                onSubmit={ handleSubmit }
                action="#">
                    <div>
                        <label htmlFor="nstdnt">Name of Student</label><br />
                        <input 
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text" id="nstdnt" name="nstdnt" required />
                    </div>
                    <div>
                        <label htmlFor="lstdnt">Last Name</label><br />
                        <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" id="lstdnt" name="lstdnt" required />
                    </div>
                    <div>
                        <label htmlFor="stdnin">NIN</label><br />
                        <input 
                        onChange={(e) => setNin(e.target.value)}
                        type="number" id="stdnin" name="stdnin" required />
                    </div>
                    <div>
                        <label htmlFor="stdemail">Email Adress</label><br />
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" id="stdemail" name="stdemail" required />
                    </div>
                    <div>
                        <label htmlFor="stnphon">Phone Number</label><br />
                        <input 
                        onChange={(e) => setPhone(e.target.value)}
                        type="number" id="stnphon" name="stnphon" />
                    </div>
                    <div>
                        <label htmlFor="sstdpaswd">Password</label><br />
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" id="sstdpaswd" name="sstdpaswd" required />
                    </div>
                    <div>
                        <label htmlFor="sstdpaswd2">Confirm Password</label><br />
                        <input
                        onChange={(e) => setPassword2(e.target.value)}
                        type="password" id="sstdpaswd2" name="sstdpaswd2" required />
                    </div>
                    <button type="submit" className="btn btn-sec btn-lag">Sign Up</button>
                </form>
            </div>
        </main>
    );
}

export default Student;

export const getServerSideProps = ({ req, res }) => {
    const cookies = req.headers.cookie;
    let is_authenticated = false;

    if (cookies) {
        const parsedCookies = cookies.split(';').map(cookie => cookie.split('='));
        const parsedCookiesObj = {};
        parsedCookies.forEach(cookie => {
            parsedCookiesObj[cookie[0].trim()] = cookie[1];
        }
        );
        if (parsedCookiesObj.token) {
            is_authenticated = true;
        }
    }

    if (is_authenticated) {
        return {
          redirect: {
            destination: '/student',
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
