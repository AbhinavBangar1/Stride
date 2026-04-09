import { useState } from 'react';
import './SideBar.css' ;
import { FaListCheck , FaList } from "react-icons/fa6";
import {useNavigate} from "react-router" ;
import {useLocation} from "react-router-dom";
import { MdDashboard } from "react-icons/md" ;
import { GrSchedule } from "react-icons/gr";
import { TbChalkboard } from "react-icons/tb";
import { BiCross } from "react-icons/bi";
import { FaProjectDiagram , FaRegUser} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";


function SideBar(){
    const tabs = [
        { name: 'DashBoard', icon: <MdDashboard className="tab-icon"/> , path:'/'},
        { name: 'Todos', icon: <FaList className="tab-icon"/> , path:'/todos' },
        { name: 'Schedule', icon: <GrSchedule className="tab-icon"/> , path:'/schedule' },
        { name: 'WhiteBoard', icon: <TbChalkboard className="tab-icon"/> , path:'/whiteboard'},
        { name: 'Tracker', icon: <BiCross className="tab-icon"/> , path:'/tracker'} ,
        { name: 'Projects' , icon: <FaProjectDiagram className="tab-icon"/> , path:'/projects'},
        { name: 'Focus' , icon :  <TbClockHour4Filled className="tab-icon"/> , path:'/focus'}
    ];

    const btabs = [
        {name : 'Profile' , icon:<FaRegUser className="tab-icon"/> , path:'/profile' },
        {name : 'Settings' , icon: <IoSettingsOutline className="tab-icon"/> , path:'/settings'}
    ]


    const navigate = useNavigate();
    const location = useLocation();
    return(
        <>
            <div className = "sidebar-container">
                <div className="upper-tabs">
                    <div className='site-container'>
                        <img src="/logo.png" className="site-logo" />
                        <p className='site-name'>Stride.</p>
                    </div>
                    <div className="tabs-top">
                        {tabs.map((tab) =>(
                            <div
                                key={tab.name}
                                className={`tab ${location.pathname === tab.path ? 'active-tab' : ''}`}
                                onClick={() => { navigate(tab.path);}}
                            >
                                {tab.icon}
                                <p className="tab-name">{tab.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tabs-bottom">
                    {btabs.map((btab) =>(
                        <div
                            key={btab.name}
                            className={`tab ${location.pathname === btab.path ? 'active-tab' : ''}`}
                            onClick={() => { navigate(btab.path);}}
                        >
                            {btab.icon}
                            <p className="tab-name">{btab.name}</p>
                        </div>
                    ))}
                    <div className="divider"></div>
                    <div className="tab logout-icon">
                        <CiLogout className="logout-icon" />
                        <p className="tab-name">Logout</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;