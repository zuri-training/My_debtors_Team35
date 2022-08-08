import { useState } from 'react'
import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

export default function ContactUs(props) {

    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleContact = (e) => {

        e.preventDefault()

        const data = {
            title,
            email,
            message
        }

        // sendemail
         console.log( data )
    }

    return (
        <div className="surface-0 text-center px-4 md:px-8 my-8">
            <section>
                <h3 className="text-4xl font-bold mb-3">Let’s get in touch,<br />
                    <span className="text-4xl font-bold flex justify-content-center align-items-center">
                        Love to hear from you
                        <img src="/assets/images/waving-hand.png" alt="waving-hand" />
                    </span>
                </h3>
            </section>
            <section className="flex align-items-center justify-content-center">
                <div className="card md:w-6">
                    <div className="p-fluid grid">
                        {/* contact form here */}
                        <form
                            onSubmit={handleContact}
                            method="POST"
                            className='w-full'>
                            <div className="field col-12">
                                <span className="p-float-label">
                                    <InputText id="inputtext" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <label htmlFor="inputtext">Title</label>
                                </span>
                            </div>
                            <div className="field col-12">
                                <span className="p-float-label">
                                    <InputText id="inputtext" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="inputtext">Email</label>
                                </span>
                            </div>
                            <div className="field col-12">
                                <span className="p-float-label">
                                    <InputTextarea id="textarea" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} />
                                    <label htmlFor="textarea">Message</label>
                                </span>
                            </div>
                            <div className="grid">
                                <div className="field col-12 md:col-6">
                                    <Button label="Send message" type="submit" className="p-button-raised p-button-primary" />
                                </div>
                                <div className="field col-12 md:col-6">
                                    <Button label="Customer care" type="reset" className="p-button-raised p-button-outlined p-button-primary" icon="pi pi-phone" iconPos="right" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

ContactUs.getLayout = function getLayout(page) {
    return (
        <Layout title="About studebt">
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}

