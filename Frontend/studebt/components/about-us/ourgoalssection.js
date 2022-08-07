import Link from 'next/link'
import { Button } from 'primereact/button'


function OurGoalsSection(props) {
    return (

        <div className="grid grid-nogutter surface-0 text-800 px-4 md:px-8 my-4">
            <div className="col-12 md:col-5 p-image">
                <img src="/assets/images/about-ourgoals.png" alt="home-dashboard" />
            </div>
            <div className="col-12 md:col-7 p-4 text-center md:text-center flex align-items-center ">
                <section>
                    <h3 className="text-4xl font-bold mb-3">Our Goals</h3>
                        <ul className="mt-0 mb-4 text-700 line-height-3">
                            <li className='p-listbox-item'>We seek to help schools prevent debtors from registering in another school.</li>
                            <li className='p-listbox-item'>We seek to give students the abilities to contend for their debts.</li>
                            <li className='p-listbox-item'>We seek to boost the financial status of a school to prevent bankruptcy.</li>
                            <li className='p-listbox-item'>We are building a user friendly and human centered product.</li>
                        </ul>
                    <Button label="Learn more" className="p-button-raised p-button-primary" icon="pi pi-arrow-right" iconPos="right" />
                </section>
            </div>

        </div>

    )
}

export default OurGoalsSection;