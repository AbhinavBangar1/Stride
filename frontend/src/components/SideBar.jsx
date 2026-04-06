import { useState } from 'react';
import './SideBar.css' ;
import { FaListCheck , FaList } from "react-icons/fa6";
import {useNavigate} from "react-router" ;
import { MdDashboard } from "react-icons/md" ;
import { GrSchedule } from "react-icons/gr";
import { TbChalkboard } from "react-icons/tb";
import { BiCross } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";


function SideBar(){
    const tabs = [
        { name: 'DashBoard', icon: <MdDashboard className="tab-icon"/> },
        { name: 'Todos', icon: <FaList className="tab-icon"/> },
        { name: 'Schedule', icon: <GrSchedule className="tab-icon"/> },
        { name: 'WhiteBoard', icon: <TbChalkboard className="tab-icon"/> },
        { name: 'Tracker', icon: <BiCross className="tab-icon"/> } ,
        { name: 'Projects' , icon: <FaProjectDiagram className="tab-icon"/>},
        { name: 'Focus' , icon :  <FaProjectDiagram className="tab-icon"/>}
    ];

    const btabs = [
        {name : 'Settings' , icon: <IoSettingsOutline className="tab-icon"/>},
        {name : 'logout' , icon: <CiLogout className="logout-icon"/> }
    ]

    const [currTab , setCurrTab] = useState('DashBoard');
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
                                className={`tab ${currTab === tab.name ? 'active-tab' : ''}`}
                                onClick={() => setCurrTab(tab.name)}
                            >
                                {tab.icon}
                                <p className="tab-name">{tab.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tabs-bottom">
                    <div className="divider"></div>

                    {btabs.map((btab) =>(
                        <div
                            key={btab.name}
                            className={`tab ${currTab === btab.name ? 'active-tab' : ''}`}
                            onClick={() => setCurrTab(btab.name)}
                        >
                            {btab.icon}
                            <p className="tab-name">{btab.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SideBar;