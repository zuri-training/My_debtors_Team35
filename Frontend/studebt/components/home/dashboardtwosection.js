import Link from 'next/link'
import { Button } from 'primereact/button'


function DashboardTwoSection(props) {
    return (

        <div className="grid grid-nogutter surface-0 text-800 px-4 md:px-8 my-4">
            <div className="col-12 md:col-4 text-center md:text-left flex align-items-center ">
                <section>
                    <h3 className="text-4xl font-bold mb-3">Easy access to student name and records</h3>
                    <p className="mt-0 mb-4 text-700 line-height-3">Get notified when you
                        have a pending student that needs to be cleared.</p>
                </section>
            </div>
            <div className="col-12 md:col-8 p-image text-right">
                <img src="/assets/images/home-dashboardtwo.jpg" alt="home-hero" />
            </div>
        </div>

    )
}

export default DashboardTwoSection;