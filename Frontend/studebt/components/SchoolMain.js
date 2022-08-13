import Link from 'next/link'
import React from 'react'
import { getDebtors, addDebtor } from '../services/debtorsService';
import { useState, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import NProgress from 'nprogress'

const SchoolMain = (schoolProfile) => {
    const [debtors, setDebtors] = useState([]);
    const [student_government_id, setStudent_government_Id] = useState([]);
    const government_id = schoolProfile.government_id
    const [student_full_name, setStudent_full_name] = useState([]);
    const [school_name, setSchool_name] = useState([]);
    const [debt_amount, setDebt_amount] = useState([]);
    const [debt_type, setDebt_type] = useState([]);
    const [debt_payment_date, setDebt_payment_date] = useState([]);

    const handleAddDebtors = async (e) => {
        e.preventDefault()
        NProgress.start();
        const data = {
            student_government_id,
            student_full_name,
            government_id,
            school_name,
            debt_amount,
            debt_type,
            debt_payment_date
        }
        console.log(data)
        await addDebtor(data).then(response => {
            console.log(response)
        }).catch(error => {
                alert(error)
        }).finally(() => {
            NProgress.done();
        } )
    }

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
                        <form onSubmit={handleAddDebtors}  action="#">
                            <div>
                                <label htmlFor="student_government_Id">Student Government Id</label><br />
                                <input 
                                onChange={(e) => setStudent_government_Id(e.target.value)}
                                type="text" id="nstdnt" name="nstdnt" required />
                            </div>
                            <div>
                                <label htmlFor="studentFullName">Name of Student</label><br />
                                <input 
                                onChange={(e) => setStudent_full_name(e.target.value)}
                                type="text" id="nstdnt" name="nstdnt" required />
                            </div>
                            <div>
                                <label htmlFor="school_name">School Name</label><br />
                                <input
                                onChange={(e) => setSchool_name(e.target.value)}
                                type="text" id="lstdnt" name="lstdnt" required />
                            </div>
                            <div>
                                <label htmlFor="debt_amount">Debt Amount</label><br />
                                <input 
                                onChange={(e) => setDebt_amount(e.target.value)}
                                type="number" id="stdnin" name="stdnin" required />
                            </div>
                            <div>
                                <label htmlFor="debt_type">Debt Type</label><br />
                                <input 
                                onChange={(e) => setDebt_type(e.target.value)}
                                type="text" id="stdemail" name="stdemail" required />
                            </div>
                            <div>
                                <label htmlFor="debt_payment_date">Debt Payment Date</label><br />
                                <input 
                                onChange={(e) => setDebt_payment_date(e.target.value)}
                                type="date" id="stdemail" name="stdemail" required />
                            </div>
                            <button type="submit" className="btn btn-sec btn-lag" onClick={handleAddDebtors}>Sign Up</button>
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