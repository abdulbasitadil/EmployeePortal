import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import DashboardAdmin from './component/DashboardAdmin';
import Role from './component/Role';
import Position from './component/Position';
import Department from './component/Department';
import AdminPortal from './component/AdminPortal';
import AdminProjectBid from './component/AdminProjectBid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="admin" element={<DashboardAdmin />}>
          <Route path="role" element={<Role />} />
          <Route path="Position" element={<Position />} />
          <Route path="department" element={<Department />} />
          <Route path="project-bid" element={<AdminProjectBid />} />
          <Route path="portal-master" element={<AdminPortal />} />
        </Route>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
