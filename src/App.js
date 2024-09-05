
// import { BrowserRouter, Route, Routes } from 'react-router-dom';  
// import "bootstrap/dist/css/bootstrap.min.css";  
// import './App.css';  
// import Header from './components/Header';  
// import Sidebar from './components/sidebar';  
// import LoginForm from './Component/LoginForm/LoginForm';  
// import StudentDataTable from './page';  
// import { useState } from 'react';  

// function App() {  
//   const [isLoggedIn, setIsLoggedIn] = useState(false);  

//   const handleLogin = () => {  
//     setIsLoggedIn(true);  
//   };  

//   return (  
//     <div>  
//       <BrowserRouter>  
//         <Routes>  
//           <Route path="/" exact element={<LoginForm onLogin={handleLogin} />} />  
//         </Routes>  
//         {isLoggedIn && (  
//           <>  
//             <Header />  
//             <div className='main d-flex '>  
//               <div className='sidebarWrapper '>  
//                 <Sidebar />  
//               </div>  
//               <StudentDataTable />  
//               <div className='content'></div>  
//             </div>  
//           </>  
//         )}  
//       </BrowserRouter>  
//     </div>  
//   );  
// }  

// export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import "bootstrap/dist/css/bootstrap.min.css";  
import './App.css';  
import Header from './components/Header';  
import Sidebar from './components/sidebar';  
import LoginForm from './Component/LoginForm/LoginForm';  
import StudentDataTable from './page';  
import { useState } from 'react';  

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  const handleLogin = () => {  
    setIsLoggedIn(true);  
  };  

  return (  
    <div>  
      <BrowserRouter>  
        <Routes>  
          {!isLoggedIn && (  
            <Route path="/" exact element={<LoginForm onLogin={handleLogin} />} />  
          )}  
        </Routes>  
        {isLoggedIn && (  
          <>  
            <Header />  
            <div className='main d-flex '>  
              <div className='sidebarWrapper '>  
                <Sidebar />  
              </div>  
              <StudentDataTable />  
              <div className='content'></div>  
            </div>  
          </>  
        )}  
      </BrowserRouter>  
    </div>  
  );  
}  

export default App;