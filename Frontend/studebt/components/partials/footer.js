import Link from 'next/link'
import { Button } from 'primereact/button'

function Footer ( props ){
    return (
        <footer className="grid grid-nogutter surface-0 text-800  px-7">
            <div className="col-12 md:col-6 text-center md:text-left flex align-items-center ">
                <section>
                    <div className="text-6xl font-bold mb-3">Keep track of <br />
                        Pending <span className='text-primary'>Student</span><br />
                        Payments.</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Get notified when you

                        have a pending student that needs to be cleared.</p>    
                    <Link href="/sign-up">
                        <Button label="Sign up" type="button" className="p-button-raised" />
                    </Link>
                </section>
            </div>
            <div className="col-12 md:col-6 p-image">
                <img src="/assets/images/home-hero.jpg" alt="home-hero" />
            </div>
        </footer>

    )

}

export default Footer;