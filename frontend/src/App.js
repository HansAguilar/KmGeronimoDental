import './App.css';
import LoginPage from './views/Login/LoginPage';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './utils/ProtectedRoutes';

// pages
import Messages from './views/Messages';
import Calendar from './views/Calendar';
import Settings from './views/Settings';
import Patients from './views/Patients';
import Appointments from './views/Appointments';
import Admin from './views/Admin';

function App() {
  return (
    <Router>
      <div className="App box-border antialiased">
        <header className="App-header">
          <Routes>
            <Route element={<LoginPage />} path='/' />
            
            <Route element={<ProtectedRoutes />}>
              <Route element={<Dashboard />} path='/dashboard'/>
              <Route element={<Appointments />} path='/appointments'/>
              <Route element={<Messages />} path='/messages'/>
              <Route element={<Admin />} path='/admin'/>
              <Route element={<Patients />} path='/patients'/>
              <Route element={<Calendar />} path='/calendar'/>
              <Route element={<Settings />} path='/settings'/>
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
