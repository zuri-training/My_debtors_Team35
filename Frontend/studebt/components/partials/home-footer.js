import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'

function HomeFooter(props) {

    const itemsOne = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Circular',
            url: '/circular'
        },
        {
            label: 'FAQ\'s',
            url: '/frequently-asked-questions'
        },
        {
            label: 'Contact Us',
            url: '/contact-us'
        }
    ];

    const itemsTwo = [
        {
            label: 'About Us',
            url: '/about-us'
        },
        {
            label: 'Privacy Policy',
            url: '/privacy-policy'
        },
        {
            label: 'Terms of Service',
            url: '/terms-of-service'
        }
    ];

    const itemsThree = [
        {
            // talk to us text
            label: <div><p>support@ercom.com</p> <br/><p>+234 80 651 88774</p><br/> <p>Contact: <br/>Facebook Linkedin Twitter</p></div>,
        }

    ];
    return (
        <footer className="bg-primary text-800 px-8 py-7">
            <section className="grid grid-nogutter" id="navigation">
                <div className="col-12 md:col-4">
                    <section>
                        {/* heading */}
                        <h6
                            style={{ paddingLeft: "16px" }}
                            className="text-900 text-white font-bold mb-3">NAVIGATION
                        </h6>
                        <Menu model={itemsOne} style={{
                            border: 'none',
                            color: '#fff !important',
                        }} />
                    </section>
                </div>
                <div className="col-12 md:col-4">
                    <section>
                        {/* heading */}
                        <h6
                            style={{ paddingLeft: "16px" }}
                            className="text-900 text-white font-bold mb-3">LEGAL
                        </h6>
                        <Menu model={itemsTwo} style={{
                            border: 'none',
                            color: '#fff !important',
                        }} />
                    </section>
                </div>
                <div className="col-12 md:col-4">
                    <section>
                        {/* heading */}
                        <h6
                            style={{ paddingLeft: "16px" }}
                            className="text-900 text-white font-bold mb-3">TALK TO US
                        </h6>
                        <Menu model={itemsThree} style={{
                            border: 'none',
                            color: '#fff !important',
                        }} />
                    </section>
                </div>
            </section>
            <hr style= {{ height: "1px"}} className='my-6 border-white border-1 w-full' />
            <section className="grid grid-nogutter" id="footer-links">
                <div className="col-12 md:col-4">
                    <Link href="/">
                        <a className="navbar-brand" >
                            <Image src="/studebt-footer-logo.png" alt="stuDept" width={150}  height={33}/>
                        </a>
                    </Link>
                </div>
                <div className="col-12 md:col-4">
                    {/* copyright */}
                    <p className="text-white text-center">
                        <span className="text-white text-900">&copy; {new Date().getFullYear()} StuDebt Ltd.
                            All rights reserved</span>
                    </p>
                </div>
                <div className="col-12 md:col-4">
                    {/* icons facebook, linkedin, twitter*/}
                    <div className="text-center">
                        <a className="p-2" href="https://www.facebook.com/studebt" target="_blank" rel="noopener noreferrer">
                            < i className="pi pi-facebook text-white" />
                        </a>
                        <a className="p-2" href="https://www.linkedin.com/company/studebt" target="_blank" rel="noopener noreferrer">
                            < i className="pi pi-linkedin text-white" />
                        </a>
                        <a className="p-2" href="https://twitter.com/studebt" target="_blank" rel="noopener noreferrer">
                            < i className="pi pi-twitter text-white" />
                        </a>

                    </div>
                </div>
            </section>

        </footer >

    )

}

export default HomeFooter;