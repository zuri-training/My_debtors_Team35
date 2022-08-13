import Link from 'next/link'
import React from 'react'
import { getDebtors } from '../services/debtorsService';
import { useState, useEffect } from 'react';

const SchoolMenuStudentsMain = () => {
    const [debtors, setDebtors] = useState([]);

    useEffect(() => {
        getDebtors().then(data => {
            setDebtors(data);
        }).catch(error => {
            console.log(error)
        });
    } , []);
    
     
    return (
        <div className='school-menu-students-main'>
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
            <div className="school-menu-students-main-top">
                <div className="school-main-students-main-right">
                    Students
                </div>
                <div className="school-main-right-debtors-edit" >
                    <Link href='/public/templates/Adddebtors.html'>
                        <a>
                            <div className="school-main-rights-debtors-edit-update-debt">
                                <img src="/images/Plus.png" alt="" />
                                <div className="">Update Debt</div>
                            </div>
                        </a>
                    </Link>
                    <Link href='/public/templates/Adddebtors.html'>
                        <a>
                            <div className="school-main-rights-debtors-edit-add-debt">
                                <img src="/images/Plus.png" alt="" />
                                <div className="">Add Debt</div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="school-menu-students-main-top-students-table">
                <div className="school-menu-students-main-top-students-table-heading">
                    <div className="school-menu-students-main-top-students-table-heading-SN table-heading">
                        S/N
                    </div>
                    <div className="school-menu-students-main-top-students-table-heading-ID table-heading">
                        ID NUMBER
                    </div>
                    <div className="school-menu-students-main-top-students-table-heading-name table-heading">
                        NAME
                    </div>
                    <div className="school-menu-students-main-top-students-table-heading-amount table-heading">
                        AMOUNT(N)
                    </div>
                    <div className="school-menu-students-main-top-students-table-heading-class table-heading">
                        CLASS
                    </div>
                    <div className="school-menu-students-main-top-students-table-heading-edit table-heading">
                        EDIT
                    </div>
                </div>
                
                {
                    debtors.map(debtor => {
                        console.log(debtor)
                        const {id, student_government_id, student_full_name, debt_amount, current_class} = debtor
                        return(
                            <div className="school-menu-students-main-top-students-table-students-data" key={id}>
                                <div className="school-menu-students-main-top-students-table-heading-SN table-data">
                                    {id}
                                </div>
                                <div className="school-menu-students-main-top-students-table-heading-ID table-data">
                                    {student_government_id}
                                </div>
                                <div className="school-menu-students-main-top-students-table-heading-name table-data">
                                    {student_full_name}
                                </div>
                                <div className="school-menu-students-main-top-students-table-heading-amount table-data">
                                    {debt_amount}
                                </div>
                                <div className="school-menu-students-main-top-students-table-heading-class table-data ">
                                    {current_class}
                                </div>
                                <div className="school-menu-students-main-top-students-table-heading-edit table-data">
                                    <img src="/images/Edit.svg" alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SchoolMenuStudentsMain