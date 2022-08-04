import Link from 'next/link'
import { Button } from 'primereact/button'


function DashboardOneSection(props) {
    return (

        <div className="grid grid-nogutter surface-0 text-800  px-7 my-4">
            <div className="col-12 md:col-8 p-image">
                <img src="/assets/images/home-dashboardone.jpg" alt="home-dashboard" />
            </div>
            <div className="col-12 md:col-4 text-center md:text-left flex align-items-center ">
                <section>
                    <h3 className="text-4xl font-bold mb-3">Easy to navigate dashboard</h3>
                    <p className="mt-0 mb-4 text-700 line-height-3">Get notified when you
                        have a pending student that needs to be cleared.</p>
                </section>
            </div>
            
        </div>

    )
}

export default DashboardOneSection;