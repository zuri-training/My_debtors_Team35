import Link from 'next/link'
import React from 'react'
import { getDebtors } from '../services/debtorsService';
import { getSchoolProfile } from '../services/profileService';
import { useState, useEffect } from 'react';

const SchoolMain = () => {
    const [debtors, setDebtors] = useState([]);
    const [schoolProfile, setSchoolProfile] = useState({});

    useEffect(() => {
        getDebtors().then(data => {
            setDebtors(data);
        }).catch(error => {
            console.log(error)
        });
        getSchoolProfile().then(data => {
            setSchoolProfile(data);
        }).catch(error => {
            console.log(error)
        });
    } , []);
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
                            <input type="text" placeholder='Search' />
                            <img src="/images/search.svg" alt="" id='search-icon' />
                        </div>
                        <div className="add-debtor">
                            <img src="/images/Plus.png" alt="" />
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
                    <div className="main-center-bottom-debtors">
                        {
                            debtors.map(debtor => {
                                return (
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
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="school-main-right">
                <div className="school-main-right-debtors-edit" >
                    <Link href='/school/students'>
                        <div className="school-main-rights-debtors-edit-update-debt">
                            <img src="/images/Plus.png" alt="" />
                            <div className="">Update Debt</div>
                        </div>
                    </Link>
                    <div className="school-main-rights-debtors-edit-add-debt">
                        <img src="/images/Plus.png" alt="" />
                        <div className="">Add Debt</div>
                    </div>
                </div>
                <div className="school-main-right-inventory-box">
                    <div className="school-main-right-inventory-box-top">
                        <div className="st-bold">
                            Inventory
                        </div>
                        <div className="school-main-right-invertory-box-top-right secondary-btn text-underline">
                            This Month
                        </div>
                    </div>
                    <div className="school-main-right-inventory-box-pie">
                        <img src="/images/piechart.png" alt="" />
                    </div>
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
                        <img src="/images/chat.svg" alt="" id='school-dashboard-chat-icon' />
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
                        <img src="/images/chat.svg" alt="" id='school-dashboard-chat-icon' />
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
                        <img src="/images/chat.svg" alt="" id='school-dashboard-chat-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolMain