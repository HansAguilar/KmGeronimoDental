import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaSignOutAlt,
    FaToggleOff,
    FaTools,
    FaRegCalendarAlt,
    FaRegCalendar,
    FaRegCalendarCheck,
    FaRegCalendarMinus,
    FaRegCalendarPlus,
    FaRegCalendarTimes,
    FaPersonBooth,
    FaUserAltSlash,
    FaUserAstronaut,
    FaUserInjured,
    FaUserLock,
    FaFacebookMessenger
}from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = ({children}) => {
    const navigate = useNavigate();
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const handleLogout = () => {
        localStorage.setItem("token", 0);
        navigate("/");
    }

    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/appointments",
            name:"Appointments",
            icon:<FaPersonBooth/>
        },
        {
            path:"/messages",
            name:"Messages",
            icon:<FaFacebookMessenger/>
        },
        {
            path:"/admin",
            name:"Admin",
            icon:<FaUserLock/>
        },
        {
            path:"/patients",
            name:"Patients",
            icon:<FaUserInjured/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaTools/>
        },
        {
            path:"/calendar",
            name:"Calendar",
            icon:<FaRegCalendarAlt/>
        }
    ]

    return (

        <div className="container">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ADMIN</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }

            <div className="link" activeclassName="active">
                <div className="icon_red"><FaSignOutAlt/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text_red">
                    <button className="link_text" onClick={handleLogout}>Sign Out</button>
                </div>
                
            </div>

        </div>
        <main>{children}</main>
     </div>
        
    );
}

export default SideBar;