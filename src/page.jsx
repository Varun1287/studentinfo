
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import AddStudent from './add'; 

function StudentDataTable() {
    const columns = [
        {
            name: 'S.No',
            selector: row => row.sno,
            // sortable: true,
            cell: row => <span className="font-semibold text-blue-600">{row.sno}</span>,
        },
        {
            name: 'RegNo',
            selector: row => row.regno,
            // sortable: true,
            cell: row => <span className="font-semibold text-blue-600">{row.regno}</span>,
        },
        {
            name: 'Name',
            selector: row => row.name,
            // sortable: true,
            cell: row => <span className="font-semibold text-blue-600">{row.name}</span>,
        },
        {
            name: "Email",
            selector: row => row.email, 
            cell: row => <span className="font-medium text-gray-800">{row.email}</span>,
        },
        
        {
            name: "Mark",
            selector: row => row.mark, 
            cell: row => <span className="font-medium text-gray-800">{row.mark}</span>,
        },
        {
            name: "Rank",
            selector: row => row.rank, 
            cell: row => <span className="font-medium text-gray-800">{row.rank}</span>,
        },
        
    ];

    const initialData = [
            {
                sno: 1,
                regno: 101,
                name: 'Sandy',
                email: 'Sandy@gmail.com',
                mark: '495',
                rank: '1',
            },  
            {  
                "sno": 2,  
                "regno": 102,  
                "name": "John",  
                "email": "john@example.com",  
                "mark": 480,  
                "rank": 2  
            },  
            {  
                "sno": 3,  
                "regno": 103,  
                "name": "Alice",  
                "email": "alice@example.com",  
                "mark": 470,  
                "rank": 3  
            },  
            {  
                "sno": 4,  
                "regno": 104,  
                "name": "Bob",  
                "email": "bob@example.com",  
                "mark": 460,  
                "rank": 4  
            },  
            {  
                "sno": 5,  
                "regno": 105,  
                "name": "Charlie",  
                "email": "charlie@example.com",  
                "mark": 450,  
                "rank": 5  
            },  
            {  
                "sno": 6,  
                "regno": 106,  
                "name": "Diana",  
                "email": "diana@example.com",  
                "mark": 440,  
                "rank": 6  
            },  
            {  
                "sno": 7,  
                "regno": 107,  
                "name": "Ethan",  
                "email": "ethan@example.com",  
                "mark": 430,  
                "rank": 7  
            },  
            {  
                "sno": 8,  
                "regno": 108,  
                "name": "Fiona",  
                "email": "fiona@example.com",  
                "mark": 420,  
                "rank": 8  
            },  
            {  
                "sno": 9,  
                "regno": 109,  
                "name": "George",  
                "email": "george@example.com",  
                "mark": 410,  
                "rank": 9  
            },  
            {  
                "sno": 10,  
                "regno": 110,  
                "name": "Hannah",  
                "email": "hannah@example.com",  
                "mark": 400,  
                "rank": 10  
            }  
    ];

    const [records, setRecords] = useState(initialData);
    const [showAddStudent, setShowAddStudent] = useState(false);

    const handleAddStudent = (newStudent) => {
        setRecords([...records, newStudent]);
        setShowAddStudent(false);
    };

    return (
        <div className="abcd">
        <div className="cda mt-5 p-4 bg-white shadow-md rounded-lg mr-50">
            
            <DataTable
                columns={columns}
                data={records}
                fixedHeader
                pagination
                highlightOnHover
                pointerOnHover
                 className="5px border border-black-800 rounded-lg"
                // style={{ borderRadius: '50rem' }}
                // theme={{
                //     rows: {
                //         style: {
                //             minHeight: '72px',
                //             borderBottom: '7px solid black', // add bottom border for row separation
                //         },
                //     },
                //     headCells: {
                //         style: {
                //             backgroundColor: 'green', // light gray background for header
                //             fontWeight: 'bold',
                //             borderRight: '5px solid #e5e7eb', // add right border for separation
                //         },
                //     },
                // }}
            />
            {showAddStudent && <AddStudent onAdd={handleAddStudent} onClose={() => setShowAddStudent(false)} />}
            <div className="text-end mb-4">
                <Button variant="contained" onClick={() => setShowAddStudent(true)} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white">
                    <IoAddCircleOutline className="mr-2" /> Add Student Info
                </Button>
            </div>
        </div>
        </div>
    );
}

export default StudentDataTable;
