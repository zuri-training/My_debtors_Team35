import { Card } from 'primereact/card'

function FeatureSection(props) {
    return (

        <div className="surface-0 text-center px-4 md:px-8 my-8">
            <div className="mb-3 font-bold text-2xl">
                <span className="text-900">Why use StuDebt</span>
            </div>
            <div className="text-700 text-sm mb-6">
                We offering interesting features that will help in keeping track of
                students pending payment records which can be accessible in one place.
            </div>
            <div className="grid">
                <div className="col-12 md:col-4 mb-4 px-5">
                    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="39.5" cy="39.5" r="39.5" fill="#26B8FD" />
                        <path d="M60 40C60 51.04 51.04 60 40 60C28.96 60 20 51.04 20 40C20 28.96 28.96 20 40 20C51.04 20 60 28.96 60 40Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M47.4217 46.36L41.2217 42.66C40.1417 42.02 39.2617 40.48 39.2617 39.22V31.02" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Card style={{
                        marginTop: '-2.7rem'
                    }}
                    className="p-4 shadow-4">
                    <div className="text-900 mb-3 font-medium">Avoid loosing track of pending payments</div>
                    <span className="text-700 text-sm line-height-3">To avoid loosing track of any student pending payments each student are assigned a unique Identifier which is used to sign the student into our system.</span>
                    </Card>
                </div>
                <div className="col-12 md:col-4 mb-4 px-5">
                    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="39.5" cy="39.5" r="39.5" fill="#8D60FF" />
                        <path d="M39 58C49.4934 58 58 49.4934 58 39C58 28.5066 49.4934 20 39 20C28.5066 20 20 28.5066 20 39C20 49.4934 28.5066 58 39 58Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M60 60L56 56" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Card style={{
                        marginTop: '-2.7rem'
                    }}
                    className="p-4 shadow-4">
                        <div className="text-900 mb-3 font-medium">Easy search option</div>
                        <span className="text-700 text-sm line-height-3">Each student can easily be searched with their unique ID which will bring up their pending payment record for verification and clearance.</span>
                    </Card>
                </div>
                <div className="col-12 md:col-4 mb-4 px-5">
                    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="39.5" cy="39.5" r="39.5" fill="#2689FD" />
                        <path d="M52.0002 30.32C51.8802 30.3 51.7402 30.3 51.6202 30.32C48.8602 30.22 46.6602 27.96 46.6602 25.16C46.6602 22.3 48.9602 20 51.8202 20C54.6802 20 56.9801 22.32 56.9801 25.16C56.9601 27.96 54.7602 30.22 52.0002 30.32Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.9389 44.8801C52.6789 45.3401 55.6989 44.8601 57.8189 43.4401C60.6389 41.5601 60.6389 38.4801 57.8189 36.6001C55.6789 35.1801 52.6189 34.7001 49.8789 35.1801" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.937 30.32C28.057 30.3 28.197 30.3 28.317 30.32C31.077 30.22 33.277 27.96 33.277 25.16C33.277 22.3 30.977 20 28.117 20C25.257 20 22.957 22.32 22.957 25.16C22.977 27.96 25.177 30.22 27.937 30.32Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.9989 44.8801C27.2589 45.3401 24.2389 44.8601 22.1189 43.4401C19.2989 41.5601 19.2989 38.4801 22.1189 36.6001C24.2589 35.1801 27.3189 34.7001 30.0589 35.1801" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M40.0002 45.2599C39.8802 45.2399 39.7402 45.2399 39.6202 45.2599C36.8602 45.1599 34.6602 42.8999 34.6602 40.0999C34.6602 37.2399 36.9602 34.9399 39.8202 34.9399C42.6802 34.9399 44.9802 37.2599 44.9802 40.0999C44.9602 42.8999 42.7602 45.1799 40.0002 45.2599Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M34.1814 51.56C31.3614 53.44 31.3614 56.52 34.1814 58.4C37.3814 60.54 42.6214 60.54 45.8214 58.4C48.6414 56.52 48.6414 53.44 45.8214 51.56C42.6414 49.44 37.3814 49.44 34.1814 51.56Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Card style={{
                        marginTop: '-2.7rem'
                    }}
                    className="p-4 shadow-4">
                    <div className="text-900 mb-3 font-medium">Integration of school organisation</div>
                    <span className="text-700 text-sm line-height-3">Each school registered under stuDebt can easily access pending payment record of a student transfering to another school.</span>
                    </Card>
               </div>
            </div>
        </div>


    );
}

export default FeatureSection;