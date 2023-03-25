import React from "react";
import logo from '../assets/images/km-logo.png';

const Header = () => {
    const username = localStorage.getItem("username")?.trim();
    return (
        <>
            <header className="bg-[#0AC1C9] h-[3.5rem] flex items-center justify-between">
                <div className="flex items-center ml-2 gap-2">
                    <img src={logo} alt="logo" width={"40px"} className="ml-2" />
                    <h1 className="text-xl text-white">K.M Geronimo Dental Clinic</h1>
                </div>
                <div className="flex items-center mr-2 gap-2 text-white">
                    {
                        username && (
                            <>
                                <h1>Hello, {username} </h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" /></svg>
                            </>
                        )}
                </div>
            </header>
        </>
    );
}

export default Header;