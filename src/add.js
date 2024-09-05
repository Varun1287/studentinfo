
// import React, { useState } from "react";

// function AddStudent({ onAdd, onClose }) {
//     const [sno, setSno] = useState('');
//     const [regno, setRegno] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [attanance, setAttanance] = useState('');
//     const [mark, setMark] = useState('');
//     const [rank, setRank] = useState('');
//     const [phoneno, setPhoneno] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (name && email) {
//             onAdd({ id: Date.now(),sno, name, email });
//             setSno('');
//             setRegno('');
//             setName('');
//             setEmail('');
//             setAttanance('');
//             setMark('');
//             setRank('');
//             setPhoneno('');
//         }
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-50 mb-4">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//                 <h2 className="text-xl font-bold mb-4 mx-2">Add Student</h2>
//                 <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">S.No</label>
//                         <input 
//                             type="sno" 
//                             value={sno} 
//                             onChange={(e) => setSno(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">Reg.No</label>
//                         <input 
//                             type="regno" 
//                             value={regno} 
//                             onChange={(e) => setRegno(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">Name</label>
//                         <input 
//                             type="text" 
//                             value={name} 
//                             onChange={(e) => setName(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">Email</label>
//                         <input 
//                             type="email" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">Attanance(%)</label>
//                         <input 
//                             type="attanance" 
//                             value={attanance} 
//                             onChange={(e) => setAttanance(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">Mark</label>
//                         <input 
//                             type="mark" 
//                             value={mark} 
//                             onChange={(e) => setMark(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">Rank</label>
//                         <input 
//                             type="rank" 
//                             value={rank} 
//                             onChange={(e) => setRank(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-1 font-medium mx-2">PhoneNo</label>
//                         <input 
//                             type="phoneno" 
//                             value={phoneno} 
//                             onChange={(e) => setPhoneno(e.target.value)} 
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300" 
//                             required 
//                         />
//                     </div>
//                     <div className="flex justify-end">
//                         <button 
//                             type="submit" 
//                             className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition mx-2 my-2" 
//                         >
//                             Add
//                         </button>
//                         <button 
//                             type="button" 
//                             onClick={onClose} 
//                             className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition" 
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AddStudent;


// import React, { useState } from "react";  

// function AddStudent({ onAdd, onClose }) {  
//     const [sno, setSno] = useState('');  
//     const [regno, setRegno] = useState('');  
//     const [name, setName] = useState('');  
//     const [email, setEmail] = useState('');  
//     const [attendance, setAttendance] = useState('');  
//     const [mark, setMark] = useState('');  
//     const [rank, setRank] = useState('');  
//     const [phoneNo, setPhoneNo] = useState('');  

//     const handleSubmit = (event) => {  
//         event.preventDefault();  
//         if (name && email) {  
//             onAdd({   
//                 id: Date.now(),   
//                 sno,   
//                 regno,   
//                 name,   
//                 email,   
//                 attendance,   
//                 mark,   
//                 rank,   
//                 phoneNo   
//             });  
//             // Clear all fields after submission  
//             setSno('');  
//             setRegno('');  
//             setName('');  
//             setEmail('');  
//             setAttendance('');  
//             setMark('');  
//             setRank('');  
//             setPhoneNo('');  
//         }  
//     };  

//     return (  
//         <div className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-50 mb-4">  
//             <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">  
//                 <h2 className="text-xl font-bold mb-4 mx-2">Add Student</h2>  
//                 <form onSubmit={handleSubmit}>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">S.No</label>  
//                         <input  
//                             type="text"  
//                             value={sno}  
//                             onChange={(e) => setSno(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Reg.No</label>  
//                         <input  
//                             type="text"  
//                             value={regno}  
//                             onChange={(e) => setRegno(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Name</label>  
//                         <input  
//                             type="text"  
//                             value={name}  
//                             onChange={(e) => setName(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Email</label>  
//                         <input  
//                             type="email"  
//                             value={email}  
//                             onChange={(e) => setEmail(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Attendance (%)</label>  
//                         <input  
//                             type="number"  
//                             value={attendance}  
//                             onChange={(e) => setAttendance(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Mark</label>  
//                         <input  
//                             type="number"  
//                             value={mark}  
//                             onChange={(e) => setMark(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Rank</label>  
//                         <input  
//                             type="text"  
//                             value={rank}  
//                             onChange={(e) => setRank(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Phone No</label>  
//                         <input  
//                             type="tel"  
//                             value={phoneNo}  
//                             onChange={(e) => setPhoneNo(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="flex justify-end">  
//                         <button  
//                             type="submit"  
//                             className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition mx-2 my-2"  
//                         >  
//                             Add  
//                         </button>  
//                         <button  
//                             type="button"  
//                             onClick={onClose}  
//                             className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"  
//                         >  
//                             Cancel  
//                         </button>  
//                     </div>  
//                 </form>  
//             </div>  
//         </div>  
//     );  
// }  

// export default AddStudent;











// import React, { useState } from "react";  

// function AddStudent({ onAdd, onClose }) {  
//     const [sno, setSno] = useState('');  
//     const [regno, setRegno] = useState('');  
//     const [name, setName] = useState('');  
//     const [email, setEmail] = useState('');  
//     const [mark, setMark] = useState('');  
//     const [rank, setRank] = useState('');  

//     const handleSubmit = (event) => {  
//         event.preventDefault();  

//         const markValue = parseFloat(mark);  

//         if (name && email) {  
//             onAdd({  
//                 id: Date.now(),  
//                 sno,  
//                 regno,  
//                 name,  
//                 email,  
//                 mark: isNaN(markValue) ? 0 : markValue, // Provide a fallback if NaN  
//                 rank,  
//             });  

//             setSno('');  
//             setRegno('');  
//             setName('');  
//             setEmail('');  
//             setMark('');  
//             setRank('');  
//         }  
//     };  

//     return (  
//         <div className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-50 mb-4 pl-30">  
//             <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">  
//                 <h2 className="text-xl font-bold mb-4 mx-4 mt-4 ">Add Student Info</h2>  
//                 <form onSubmit={handleSubmit}>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2 align-items-center">S.No: </label>  
//                         <input  
//                             type="text"  
//                             value={sno}  
//                             onChange={(e) => setSno(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Reg.No: </label>  
//                         <input  
//                             type="text"  
//                             value={regno}  
//                             onChange={(e) => setRegno(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Name: </label>  
//                         <input  
//                             type="text"  
//                             value={name}  
//                             onChange={(e) => setName(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Email: </label>  
//                         <input  
//                             type="email"  
//                             value={email}  
//                             onChange={(e) => setEmail(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Mark: </label>  
//                         <input  
//                             type="number"  
//                             value={mark}  
//                             onChange={(e) => setMark(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
//                     <div className="mb-4">  
//                         <label className="block mb-1 font-medium mx-2">Rank:</label>  
//                         <input  
//                             type="text"  
//                             value={rank}  
//                             onChange={(e) => setRank(e.target.value)}  
//                             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
//                             required  
//                         />  
//                     </div>  
                    
//                     <div className="flex justify-end">  
//                         <button  
//                             type="submit"  
//                             className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition mx-2 my-2"  
//                         >  
//                             Add  
//                         </button>  
//                         <button  
//                             type="button"  
//                             onClick={onClose}  
//                             className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"  
//                         >  
//                             Cancel  
//                         </button>  
//                     </div>  
//                 </form>  
//             </div>  
//         </div>  
//     );  
// }  

// export default AddStudent;


import React, { useState } from "react";  

function AddStudent({ onAdd, onClose }) {  
    const [sno, setSno] = useState('');  
    const [regno, setRegno] = useState('');  
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [mark, setMark] = useState('');  
    const [rank, setRank] = useState('');  

    const handleSubmit = (event) => {  
        event.preventDefault();  

        const markValue = parseFloat(mark);  

        if (name && email) {  
            onAdd({  
                id: Date.now(),  
                sno,  
                regno,  
                name,  
                email,  
                mark: isNaN(markValue) ? 0 : markValue, // Provide a fallback if NaN  
                rank,  
            });  

            setSno('');  
            setRegno('');  
            setName('');  
            setEmail('');  
            setMark('');  
            setRank('');  
        }  
    };  

    return (  
        <div className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-50 mb-4 pl-30">  
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">  
                <h2 className="text-xl font-bold mb-4 mx-4 mt-4 ">Add Student Info</h2>  
                <form onSubmit={handleSubmit}>  
                    <div className="mb-4">  
                        <label className="block mb-1 font-medium mx-2 align-items-center">S.No: </label>  
                        <input  
                            type="text"  
                            value={sno}  
                            onChange={(e) => setSno(e.target.value)}  
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
                            required  
                        />  
                    </div>  
                    <div className="mb-4">  
                        <label className="block mb-1 font-medium mx-2">Reg.No: </label>  
                        <input  
                            type="text"  
                            value={regno}  
                            onChange={(e) => setRegno(e.target.value)}  
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
                            required  
                        />  
                    </div>  
                    <div className="mb-4">  
                        <label className="block mb-1 font-medium mx-2">Name: </label>  
                        <input  
                            type="text"  
                            value={name}  
                            onChange={(e) => setName(e.target.value)}  
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
                            required  
                        />  
                    </div>  
                    <div className="mb-4">  
                        <label className="block mb-1 font-medium mx-2">Email: </label>  
                        <input  
                            type="email"  
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}  
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
                            required  
                        />  
                    </div>  
                    <div className="mb-4">  
                        <label className="block mb-1 font-medium mx-2">Mark: </label>  
                        <input  
                            type="number"  
                            value={mark}  
                            onChange={(e) => setMark(e.target.value)}  
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
                            required  
                        />  
                    </div>  
                    <div className="mb-4">  
                        <label className="block mb-1 font-medium mx-2">Rank:</label>  
                        <input  
                            type="text"  
                            value={rank}  
                            onChange={(e) => setRank(e.target.value)}  
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
                            required  
                        />  
                    </div>  
                    
                    <div className="flex justify-end">  
                        <button  
                            type="submit"  
                            className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition mx-2 my-2"  
                        >  
                            Add  
                        </button>  
                        <button  
                            type="button"  
                            onClick={onClose}  
                            className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"  
                        >  
                            Cancel  
                        </button>  
                    </div>  
                </form>  
            </div>  
        </div>  
    );  
}  

export default AddStudent;  
