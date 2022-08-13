import Link from 'next/link'
import React from 'react'
import { getDebtors, addDebtors } from '../services/debtorsService';
import { useState, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const SchoolMain = () => {
    const [debtors, setDebtors] = useState([]);

    useEffect(() => {
        getDebtors().then(data => {
            setDebtors(data);
        }).catch(error => {
            console.log(error)
        });
    } , []);

    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

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
                                const {student_full_name, student_government_id, debt_amount, debt_status, id} = debtor
                                return (
                                    <div className="main-center-bottom-debtors-debtor" key={id}>
                                        <div className="main-center-bottom-debtors-debtor-profile-img">
                                            <img src="/images/profile.png" alt="" />
                                        </div>
                                        <div className="main-center-bottom-debtors-debotor-name">
                                            {student_full_name}
                                        </div>
                                        <div className="main-center-bottom-debtors-debtor-unique-id">
                                            {student_government_id}
                                        </div>
                                        <div className="main-center-bottom-debtors-debtor-debt-amount">
                                            {debt_amount}
                                        </div>
                                        <div className="main-center-bottom-debtors-debtor-debt-status new-debt st-bold">
                                            {debt_status}
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
                    <div className="school-main-rights-debtors-edit-add-debt" onClick={() => setVisibleFullScreen(true)} >
                        <img src="/images/Plus.png" alt="" />
                        <div className="">Add Debt</div>
                    </div>
                    <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                        <h3>Added Debtors</h3>
                        <form  action="#">
                            <div>
                                <label htmlFor="nstdnt">Name of Student</label><br />
                                <input 
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text" id="nstdnt" name="nstdnt" required />
                            </div>
                            <div>
                                <label htmlFor="lstdnt">Last Name</label><br />
                                <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text" id="lstdnt" name="lstdnt" required />
                            </div>
                            <div>
                                <label htmlFor="stdnin">NIN</label><br />
                                <input 
                                onChange={(e) => setNin(e.target.value)}
                                type="number" id="stdnin" name="stdnin" required />
                            </div>
                            <div>
                                <label htmlFor="stdemail">Email Adress</label><br />
                                <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" id="stdemail" name="stdemail" required />
                            </div>
                            <div>
                                <label htmlFor="stnphon">Phone Number</label><br />
                                <input 
                                onChange={(e) => setPhone(e.target.value)}
                                type="number" id="stnphon" name="stnphon" />
                            </div>
                            <div>
                                <label htmlFor="sstdpaswd">Password</label><br />
                                <input 
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" id="sstdpaswd" name="sstdpaswd" required />
                            </div>
                            <div>
                                <label htmlFor="sstdpaswd2">Confirm Password</label><br />
                                <input
                                onChange={(e) => setPassword2(e.target.value)}
                                type="password" id="sstdpaswd2" name="sstdpaswd2" required />
                            </div>
                            <button type="submit" className="btn btn-sec btn-lag">Sign Up</button>
                        </form>
                    </Sidebar>
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