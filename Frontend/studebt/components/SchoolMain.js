import React from 'react'

const SchoolMain = () => {
    return (
        <div className='school-main'>
            <div className="school-main-center">
                <div className="main-center-top">
                    <div className="outstanding-debt-container">
                        <div className="outstanding-debt">
                            <h6 className='lt-regular'>Outstanding Debt</h6>
                            <h4>N 150 000</h4>
                        </div>
                        <div className="outstanding-percent">
                            <span className='success'>+30%</span>
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="search">
                            <input type="text" />
                        </div>
                        <div className="add-debtor">

                        </div>
                    </div>
                </div>
                <div className="main-center-top">
                    
                </div>
            </div>
            <div className="school-main-left">

            </div>
        </div>
    )
}

export default SchoolMain