import Link from 'next/link'

function Contact(props) {
    return (
        <div className="surface-0 text-center px-4 md:px-8 my-8">
            <section>
                <h3 className="text-4xl font-bold mb-3">Still have questions?</h3>
                <p className="mt-0 mb-4 text-700 line-height-3">Can’t find the answer you are looking for? Kindly reach out to our customer service.</p>
                <h3 className="text-2xl font-bold mb-3">
                    <Link href="/contact-us">
                        <a className="no-underline">Get in touch</a>
                    </Link>
                </h3>
            </section>

        </div>
    )
}

export default Contact;