import Link from 'next/link'
import { Button } from 'primereact/button'

function TeamSection(props) {
    return (

        <div className="surface-0 text-center px-4 md:px-8 my-8">
            <section>
                <h3 className="text-4xl font-bold mb-3">Meet The Team</h3>
                <p className="mt-0 mb-4 text-700 line-height-3">We have the best work culture, building the best user friendly and human centered product for our users and building the best place to work.</p>
            </section>
            <div className="grid">
                <div className="col-12 md:col-4 mb-4 px-5">
                    <img src="/assets/images/about-team1.png" alt="about-team1" />
                </div>
                <div className="col-12 md:col-4 mb-4 px-5">
                    <img src="/assets/images/about-team2.png" alt="about-team2" />
                </div>
                <div className="col-12 md:col-4 mb-4 px-5">
                    <img src="/assets/images/about-team3.png" alt="about-team3" />
                </div>
            </div>
            <div className="grid">
                <div className="col-12 md:col-4 mb-4 px-5">
                    <img src="/assets/images/about-team4.png" alt="about-team4" />
                </div>
                <div className="col-12 md:col-4 mb-4 px-5">
                    <img src="/assets/images/about-team5.png" alt="about-team5" />
                </div>
                <div className="col-12 md:col-4 mb-4 px-5">
                    <img src="/assets/images/about-team6.png" alt="about-team6" />
                </div>
            </div>
        </div>

    )
}

export default TeamSection;