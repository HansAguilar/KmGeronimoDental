import React from "react";
import logo from '../assets/images/km-logo.png';


const Header = () => {
    return (
        <>
            <header className="bg-[#0AC1C9] h-[3.5rem] flex items-center pl-6">
                <img src={logo} alt="logo" width={"65px"} className=" ml-2 rounded"/>
                <h1 className="text-3xl text-white">K.M Geronimo Dental Clinic</h1>
            </header>
        </>
    );
}

export default Header;