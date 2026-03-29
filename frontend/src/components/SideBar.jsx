import { useState } from 'react';
import './SideBar.css' ;
import { FaListCheck , FaList } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md" ;
import { GrSchedule } from "react-icons/gr";
import { TbChalkboard } from "react-icons/tb";
import { BiCross } from "react-icons/bi";


function SideBar(){
    const tabs = [
        { name: 'DashBoard', icon: <MdDashboard /> },
        { name: 'Todos', icon: <FaList /> },
        { name: 'Schedule', icon: <GrSchedule /> },
        { name: 'WhiteBoard', icon: <TbChalkboard /> },
        { name: 'Tracker', icon: <BiCross /> }
    ];

    const [currTab , setCurrTab] = useState('DashBoard');
    return(
        <>
            <div className='sidebar-container'>
            {tabs.map((tab, index) => (
                <div key={tab.name}>
                <button className='sidebar-tabs' onClick={() => setCurrTab(tab.name)}>
                    {tab.icon}
                    <span style={{ marginLeft: '1rem' }}>{tab.name}</span>
                </button>
                </div>
            ))}
            </div>
        </>
    );
}

export default SideBar;