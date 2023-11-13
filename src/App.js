
import './App.css';
import './style.css';
import Complaint from './Component/Complaint';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Disclaimer from './Footer/Disclaimer';
import {Route, Routes} from "react-router-dom";
import Privacy_Policy from './Footer/Privacy_Policy';
import TermsofUse from './Footer/TermsofUse';
import Menu from './Admin/Menu';
import Status from './Admin/Status';
import Profile from './Admin/Profile';
import Complaints from './Component/Complaints';
import 'bootstrap/dist/css/bootstrap.min.css';

import Maintainance from './Component/Maintainance';
import AddStakeHolder from './Stakeholder/AddStakeHolder';
import MaintainanceAd from './Admin/MaintainanceAd';
import Studentsts from './Admin/Studentsts';
import Send from './Admin/Send';
import Totalc from './Admin/Totalc';
import Slogout from './Stakeholder/Slogout';
import Solved from './Admin/Solved';
import Pending from './Admin/Pending';
import FalseComplaint from './Admin/FalseComplaint';
import Logout from './Admin/Logout';
import Stotal from './Stakeholder/Stotal';
import Spending from './Stakeholder/Spending';
import Snavbar from './Stakeholder/Snavbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
   
 
{/* <ToastContainer position='bottom-center'> */}
    <ToastContainer position='bottom-center'/>
       <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/login" element = {<Login />} />
    <Route path="/signup" element = {<SignUp />} />
    <Route path="/complaint" element = {<Complaint />} />
    <Route path="/disclaimer" element = {<Disclaimer />} />
    <Route path="/privacypolicy" element = {<Privacy_Policy />} />
    <Route path="/termsofuse" element = {<TermsofUse />} />
    <Route path="/menu" element = {<Menu />} />
    <Route path="/status" element = {<Status />} />
    <Route path="/profile" element = {<Profile />} />
    <Route path="/complaints" element = {<Complaints />} />
    <Route path="/maintainance" element = {<Maintainance />} />
    <Route path="/maintain" element = {<MaintainanceAd />} />
    <Route path="/addstakeholder" element = {<AddStakeHolder />} />
    <Route path="/send" element = {<Send/>} />
    <Route path="/total" element = {<Totalc/>} />
    <Route path="/solved" element = {<Solved/>} />
    <Route path="/pending" element = {<Pending/>} />
    <Route path="/falseComplaint" element = {<FalseComplaint/>} />
    <Route path="/check" element = {<Studentsts/>} />
    <Route path="/logout" element = {<Logout/>} />
    <Route path="/stotal" element = {<Stotal/>} />
    <Route path="/spending" element = {<Spending/>} />
    <Route path="/snav" element = {<Snavbar/>} />
    <Route path="/slogout" element = {<Slogout/>} />
    </Routes>
    {/* </ToastContainer> */}
   
   
    </>
  );
}

export default App;
