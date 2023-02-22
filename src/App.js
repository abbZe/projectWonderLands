import './scss/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainHeader from './components/MainHeader/MainHeader';
import SideBar from './components/SideBar/SideBar';
import MainFooter from './components/MainFooter/MainFooter';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <MainHeader/>
        <SideBar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dialogs' element={<Dialogs/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
        <MainFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;