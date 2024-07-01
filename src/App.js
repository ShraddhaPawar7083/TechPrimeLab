import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateProject from './pages/CreateProject';
import ProjectListing from './pages/ProjectListing';
// import Login2 from './pages/Login2';
// import CreateProject2 from './pages/CreateProject2';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      {/* <Sidebar/> */}
      {/* <Login2/> */}
      {/* <Dashboard/> */}
      {/* <CreateProject/> */}
      {/* <ProjectListing/> */}
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createproject" element={<CreateProject />} />
        <Route path="projectlisting" element={<ProjectListing />} />
        <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
