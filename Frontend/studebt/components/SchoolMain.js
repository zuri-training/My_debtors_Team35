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
                    <div className="main-center-bottom-debtors">
                        <div className="main-center-bottom-debtors-debtor">
                            <div className="main-center-bottom-debtors-debtor-profile-img">
                                <img src="/images/profile.png" alt="" />
                            </div>
                            <div className="main-center-bottom-debtors-debotor-name">
                                Olayeni Adeyemo Samuel
                            </div>
                            <div className="main-center-bottom-debtors-debtor-unique-id">
                                AGG1810690
                            </div>
                            <div className="main-center-bottom-debtors-debtor-debt-amount">
                                N5,000
                            </div>
                            <div className="main-center-bottom-debtors-debtor-debt-status new-debt st-bold">
                                New
                            </div>
                        </div>
                        <div className="main-center-bottom-debtors-debtor">
                            <div className="main-center-bottom-debtors-debtor-profile-img">
                                <img src="/images/profile.png" alt="" />
                            </div>
                            <div className="main-center-bottom-debtors-debotor-name">
                                Olayeni Adeyemo Samuel
                            </div>
                            <div className="main-center-bottom-debtors-debtor-unique-id">
                                AGG1810690
                            </div>
                            <div className="main-center-bottom-debtors-debtor-debt-amount">
                                N5,000
                            </div>
                            <div className="main-center-bottom-debtors-debtor-debt-status denied-debt st-bold">
                                Denied
                            </div>
                        </div>
                        <div className="main-center-bottom-debtors-debtor">
                            <div className="main-center-bottom-debtors-debtor-profile-img">
                                <img src="/images/profile.png" alt="" />
                            </div>
                            <div className="main-center-bottom-debtors-debotor-name">
                                Olayeni Adeyemo Samuel
                            </div>
                            <div className="main-center-bottom-debtors-debtor-unique-id">
                                AGG1810690
                            </div>
                            <div className="main-center-bottom-debtors-debtor-debt-amount">
                                N5,000
                            </div>
                            <div className="main-center-bottom-debtors-debtor-debt-status cleared-debt st-bold">
                                Cleared
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="school-main-right">
                <div className="school-main-right-inventory-box">

                </div>
                <div className="school-main-right-comments-box">
                    <div className="school-main-right-comments-box-header">
                        <div className="mt-bold">
                            Comments
                        </div>
                        <Link href=''>
                            <a className='text-underline'>More</a>
                        </Link>
                    </div>
                    <div className="school-main-right-comments-box-comment">
                        <img src="/images/profile.png" alt="" />
                        <div className="school-main-right-comments-box-debtors-details">
                            <div className="st-bold">
                                Olayeni Adeyemo Samuel
                            </div>
                            <div className="st-regular">
                                AGG1810690
                            </div>
                        </div>
                    </div>
                    <div className="school-main-right-comments-box-comment">
                        <img src="/images/profile.png" alt="" />
                        <div className="school-main-right-comments-box-debtors-details">
                            <div className="st-bold">
                                Olayeni Adeyemo Samuel
                            </div>
                            <div className="st-regular">
                                AGG1810690
                            </div>
                        </div>
                    </div>
                    <div className="school-main-right-comments-box-comment">
                        <img src="/images/profile.png" alt="" />
                        <div className="school-main-right-comments-box-debtors-details">
                            <div className="st-bold">
                                Olayeni Adeyemo Samuel
                            </div>
                            <div className="st-regular">
                                AGG1810690
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolMain