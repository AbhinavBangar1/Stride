import './App.css' ;
import Schedule from './pages/Schedule.jsx' ;
import SideBar from './components/SideBar.jsx' ;
import Header from './components/Header.jsx'
import { useState } from 'react' ;
import Dashboard from './pages/Dashboard.jsx'  ;
import Whiteboard from './pages/Whiteboard.jsx' ;
import Tracker from './pages/Tracker.jsx' ;
import Todo from './pages/Todo.jsx' ;
import Projects from './pages/Projects.jsx' ;
import Profile from './pages/Profile.jsx' ;
import Settings from './pages/Settings.jsx'
import Focus from './pages/Focus.jsx';
import {Routes , Route } from 'react-router-dom' ;

function App() {

  return (
    <>
        {/* <Header/> */}
        <SideBar/>
        <div style = {{marginLeft : "17vw"}}>
          <Routes>
            <Route path="/" element = {<Dashboard />} />
            <Route path="/todos" element = {<Todo />} />
            <Route path="/schedule" element = {<Schedule />} />
            <Route path="/whiteboard" element = {<Whiteboard />} />
            <Route path="/tracker" element = {<Tracker />} />
            <Route path="/projects" element = {<Projects />} />
            <Route path="/profile" element = {<Profile/>} />
            <Route path="/focus" element = {<Focus/>}/>
            <Route path="/settings" element = {<Settings />}/>
          </Routes>
        </div>
    </>
  )
}

export default App
