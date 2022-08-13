import { useState, useEffect } from 'react';
import { register } from './../../services/authService';
import { useRouter } from 'next/router'
import  NProgress from 'nprogress'
import Link from 'next/link'

function School(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [propietor, setPropietor] = useState('')
    const [lga, setLga] = useState('')
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [cac, setCac] = useState('')
    const [is_school, setIsSchool] = useState(true)
    const [is_student , setIsStudent] = useState(false)
    
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        NProgress.start();
        const profile = {
            name,
            propietor,
            lga,
            state,
            phone,
            address,
            cac,
        }
        const data = {
            email,
            profile,
            password,
            password2,
            is_school: true,
            is_student: false
        }
       await register(data).then(response => {
            console.log(response)
        }).catch(error => {
                alert(error)
        }).finally(() => {
            router.push('/login/school')
            NProgress.done();
        } )
    }

    return (
        <main className="gencont">
            <div className="logodiv">
                <div className="logo-sec">
                    <img src="/logo-2.svg" alt="logo" />
                    <h1 className="whitecol">stuDEBT</h1>
                </div>
                <p className="lt-regular">
                    Sign up with the registered school&#39;s name and propietor&#39;s name
                </p>
            </div>
            <div className="form">
                <p className="msg001">
                    Already a partner? <Link href="/login/school"><a> Log in</a></Link>
                </p>
                <div className="horule">
                    <hr className="one" />
                    <hr className="two" />
                    <hr className="Three" />
                </div>
                <h2 className="head0">Sign up as a partner</h2>
                <form 
                    onSubmit={handleSubmit}
                >
                    {/* hiidden is_school */}
                    <input type="hidden" name="is_school" value="1" />
                    <div>
                        <label htmlFor="nschool">Name of School</label><br />
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text" id="nschool" name="nschool" required />
                    </div>
                    <div>
                        <label htmlFor="semail">School Email Adress</label><br />
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                         type="email" id="nschool" name="nschool" required />
                    </div>
                    <div>
                        <label htmlFor="npropietor">Name of Propietor</label><br />
                        <input
                        onChange={(e) => setPropietor(e.target.value)}
                         type="text" id="npropietor" name="npropietor" required />
                    </div>
                    <div>
                        <label htmlFor="lga">LGA</label><br />
                        <input
                        onChange={(e) => setLga(e.target.value)}
                         type="text" id="npropietor" name="npropietor" required />
                    </div>
                    <div>
                        <label htmlFor="state">state</label><br />
                        <input
                        onChange={(e) => setState(e.target.value)}
                         type="text" id="npropietor" name="npropietor" required />
                    </div>
                    <div>
                        <label  htmlFor="phonen">Phone Number</label><br />
                        <input 
                        onChange={(e) => setPhone(e.target.value)}
                        type="number" id="phonen" name="phonen" required />
                    </div>
                    <div>
                        <label  htmlFor="address">Address</label><br />
                        <input 
                        onChange={(e) => setAddress(e.target.value)}
                        type="text" id="phonen" name="phonen" required />
                    </div>
                    <div>
                        <label  htmlFor="paswd">Password</label><br />
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" id="paswd" name="paswd" required />
                    </div>

                    <div>
                        <label  htmlFor="paswd2">Confirm Password</label><br />
                        <input
                        onChange={(e) => setPassword2(e.target.value)}
                        type="password" id="paswd2" name="paswd2" required />
                    </div>

                    <div>
                        <label  htmlFor="cac">School C.A.C Number</label><br />
                        <input 
                        onChange={(e) => setCac(e.target.value)}
                        type="number" id="cac" name="cac" required />
                    </div>
                    <button type="submit" className="btn btn-sec btn-lag">
                        Register
                    </button>
                </form>
            </div>
        </main>
    );
}

export default School;

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