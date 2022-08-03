import Link from 'next/link'
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
                <div className="main-center-chart">
                    <div className="main-center-chart-top">
                        <p className='mt-bold'>New Debtors</p>
                        <div className="chart-time">
                            <p className='st-regular secondary-btn'>This Year</p>
                        </div>
                    </div>
                    <div className="main-center-chart-bottom">
                        <div className="main-center-chart-bottom-rates">
                            <p className='mt-bold'>+15 Students</p>
                            <div className="main-center-chart-bottom-rates-direction success">
                                <p>+10%</p>
                            </div>
                        </div>
                        <div className="main-center-chart-bottom-chart">
                            <img src='/images/bar.png' />
                        </div>
                    </div>
                </div>
                <div className="main-center-bottom">
                    <div className="main-center-bottom-top">
                        <h6 className=''>Appeals</h6>
                        <div className="main-center-bottom-top-more">
                            <Link href=""><a className='secondary-btn'>More</a></Link>
                        </div>
                    </div>
                    <div className="main-center-bottom-filter">
                        <div className="main-center-bottom-filter-left">
                            <div className="main-center-bottom-filter-button">
                                <p className='nt-bold'>
                                    99
                                </p>
                                <p className='nt-regular'>
                                    <Link href=''>
                                        <a className='text-underline'>All</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="main-center-bottom-filter-button">
                                <p className='nt-bold'>
                                    12
                                </p>
                                <p className='nt-regular'>
                                    <Link href=''>
                                        <a className=''>New</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="main-center-bottom-filter-button">
                                <p className='nt-bold'>
                                    45
                                </p>
                                <p className='nt-regular'>
                                    <Link href=''>
                                        <a className=''>Pending</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="main-center-bottom-filter-button">
                                <p className='nt-bold'>
                                    12
                                </p>
                                <p className='nt-regular'>
                                    <Link href=''>
                                        <a className=''>Cleared</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="main-center-bottom-filter-button">
                                <p className='nt-bold'>
                                    30
                                </p>
                                <p className='nt-regular'>
                                    <Link href=''>
                                        <a className=''>Denied</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="main-center-bottom-filter-right">

                        </div>
                    </div>
                </div>
            </div>
            <div className="school-main-left">

            </div>
        </div>
    )
}

export default SchoolMain