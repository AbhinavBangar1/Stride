import './App.css'
import Schedule from './pages/Schedule.jsx'
import SideBar from './components/SideBar.jsx'
import { useState } from 'react'
import Dashboard from './pages/Dashboard.jsx' 
import Whiteboard from './pages/Whiteboard.jsx'
import Tracker from './pages/Tracker.jsx'
import Todo from './pages/Todo.jsx'
import Projects from './pages/Projects.jsx'
import {Routes , Route } from 'react-router-dom' ;

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element = {<Dashboard />} />
          <Route path="/todo" element = {<Todo />} />
          <Route path="/schedule" element = {<Schedule />} />
          <Route path="/whiteboard" element = {<Whiteboard />} />
          <Route path="/tracker" element = {<Tracker />} />
          <Route path="/projects" element = {<Projects />} />
        </Routes>
    </>
  )
}

export default App
