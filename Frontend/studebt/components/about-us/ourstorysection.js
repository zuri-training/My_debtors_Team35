import Link from 'next/link'
import { Button } from 'primereact/button'


function OurStorySection(props) {
    return (

        <div className="grid grid-nogutter surface-0 text-800 px-4 md:px-8 my-4">

            <div className="col-12 md:col-7 p-4 text-center md:text-center flex align-items-center ">
                <section>
                    <h3 className="text-4xl font-bold mb-3">Our Story</h3>
                    <p className="mt-0 mb-4 text-700 line-height-3">Because we believe that the schools might not be 100% correct, so every student has the ability to contend for every debt on our platform attached to his or her name..</p>
                    <Button label="Learn more" className="p-button-raised p-button-primary" icon="pi pi-arrow-right" iconPos="right"  />
                </section>
            </div>
            <div className="col-12 md:col-5 p-image">
                <img src="/assets/images/about-ourstory.png" alt="home-dashboard" />
            </div>

        </div>

    )
}

export default OurStorySection;