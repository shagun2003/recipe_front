import './App.css';
import Login from "./Component/account/Login";
import Ome from './Component/Ome/Ome';
import Dataprovider from './context/Dataprovider';
import Eader from './Component/Eader/Eader';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Createpost from './Component/Create/Createpost';
import Details from './Component/Details/Details';
import Updatepost from './Component/Create/Update';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
// Corrected PrivateRoute component
const PrivateRoute = ({ auten }) => {
    return auten ?<> <Eader /> <Outlet /></> : <Navigate to="/login" replace />;
};

function App() {
    const [auten, isauten] = useState(false);

    return (
        <Dataprovider>
            <BrowserRouter>
               <div style={{ marginTop: '60px' }}>
                    <Routes>
                        <Route path="/login" element={<Login isauten={isauten} />} />
                        <Route path="/" element={<PrivateRoute auten={auten} />}>

                            <Route path="/" element={<Ome />} />
                            <Route path="/create" element={<Createpost/>} /> 
                           
                        </Route>
                        <Route path="/details/:id" element={<PrivateRoute auten={auten} />}>

                        <Route path="/details/:id" element={<Details/>} /> 
                           
                        </Route>
                        <Route path='/update/:id' element={<PrivateRoute auten={auten} />} >
                        <Route path='/update/:id' element={<Updatepost />} />
                        </Route>
                        <Route path='/about' element={<PrivateRoute auten={auten} />} >
                        <Route path='/about' element={<About />} />
                        </Route>
                        <Route path='/contact' element={<PrivateRoute auten={auten} />} >
                        <Route path='/contact' element={<Contact />} />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </Dataprovider>
    );
}

export default App;
