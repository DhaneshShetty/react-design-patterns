import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import withUserData from './components/withUserData';
import Profile from './components/Profile';
import Reports from './components/Reports';
import Admin from './components/Admin';

const ProfileWithData = withUserData(Profile);
const ReportsWithUserData = withUserData(Reports);
const AdminWithUserData = withUserData(Admin);

function App() {

  return (
      <div className='app-container'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<ProfileWithData message={"Hi There! Using HOC"}/>} />
            <Route path='/reports' element={<ReportsWithUserData />} />
            <Route path='/admin'  element={<AdminWithUserData />} />
          </Routes>
        </HashRouter>
      </div>
  )
}

export default App;
