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
import PageNotFound from './views/PageNotFound';
import ForgotPassword from './views/ForgotPassword';
import Announcement from './views/Announcement';


function App() {
	return (
		<Router>
			<div className="App box-border antialiased">
				<header className="App-header">
					<Routes>
						{/* initial page */}
						<Route element={<LoginPage />} path='/' />

						<Route element={<ForgotPassword />} path='/forgotpassword' />

						{/* protect these routes */}
						<Route element={<ProtectedRoutes />}>
							<Route element={<Dashboard />} path='/dashboard'/>
							<Route element={<Appointments />} path='/appointments' />
							<Route element={<Messages />} path='/messages' />
							<Route element={<Admin />} path='/admin' />
							<Route element={<Patients />} path='/patients' />
							<Route element={<Calendar />} path='/calendar' />
							<Route element={<Announcement />} path='/announcement' />
							<Route element={<Settings />} path='/settings' />
							<Route element={<PageNotFound />} path="*" />
						</Route>
					</Routes>
				</header>
			</div>
		</Router>
	);
}

export default App;
