import Link from 'next/link'
import React from 'react'
import { getDebtors } from '../services/debtorsService';
import { editDebtors } from '../services/debtorsService';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const SchoolMenuStudentsMain = () => {
    const [debtors, setDebtors] = useState([]);
    const [selectedDebtor, setSelectedDebtor] = useState(null)
    const [globalFilter, setGlobalFilter] = useState(null);

    useEffect(() => {
        getDebtors().then(data => {
            setDebtors(data);
        }).catch(error => {
            console.log(error)
        });
    }, []);

    const STATUS = [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Cleared', value: 'CLEARED' },
        { label: 'Denied', value: 'DENIED' },
    ];

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const statusEditor = (options) => {
        return (
            <Dropdown value={options.value} options={STATUS} onChange={(e) => options.editorCallback(e.value)} />
        );
    }

    const header = (
        <div className="table-header students-page-topbar-left w-full">
            <span className="p-input-icon-left w-full">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const onDebtorEditComplete = (e) => {
        let _debtors = [...debtors];
        let { newData, index } = e;

        _debtors[index] = newData;
        setDebtors(_debtors);
        editDebtors(newData).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setSelectedDebtor(null);
        })
    }



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

                <DataTable

                    value={debtors} editMode="row" dataKey="id" selection={selectedDebtor}
                    header={header}
                    globalFilter={globalFilter}
                    onSelectionChange={e => setSelectedDebtor(e.value)}
                    onRowEditComplete={onDebtorEditComplete}
                    paginator rows={10} >
                    <Column selectionMode="single" headerStyle={{ width: '3em' }}></Column>
                    <Column field="student_government_id" header="S/N" sortable={true} />
                    <Column field="student_full_name" header="STUDENT NAME" sortable={true} />
                    <Column field="school_name" header="SCHOOL NAME" sortable={true} />
                    <Column field="debt_amount" header="AMOUNT(N)" sortable={true} />
                    <Column field="debt_status" header="STATUS" sortable={true} editor={statusEditor} />
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default SchoolMenuStudentsMain