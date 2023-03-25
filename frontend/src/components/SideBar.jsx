import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
        <aside className="flex flex-col flex-1 gap-8 p-4 bg-[#73949B] text-white font-medium h-full">
            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round"><path d="m1.5 10.5l9-9l9 9" /><path d="M3.5 8.5v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8" /></g></svg>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </div>

            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="white" d="M159.1 142.1A37.6 37.6 0 0 0 174 112a38 38 0 0 0-76 0a37.6 37.6 0 0 0 14.9 30.1a66.4 66.4 0 0 0-29.7 22.3a6 6 0 0 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.2a6 6 0 0 0 1.2-8.4a66.4 66.4 0 0 0-29.7-22.3ZM110 112a26 26 0 1 1 26 26a26.1 26.1 0 0 1-26-26Zm98-86H64a14 14 0 0 0-14 14v22H32a6 6 0 0 0 0 12h18v28H32a6 6 0 0 0 0 12h18v28H32a6 6 0 0 0 0 12h18v28H32a6 6 0 0 0 0 12h18v22a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm2 190a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z" /></svg>
                <NavLink to="/appointments">Appointments</NavLink>
            </div>

            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="white" d="M216 42H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h59.5a2.1 2.1 0 0 1 1.7 1l14.8 24.7a14 14 0 0 0 24 0l14.8-24.7a2.1 2.1 0 0 1 1.7-1H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 142a2 2 0 0 1-2 2h-59.5a14 14 0 0 0-12 6.8l-14.8 24.7a1.9 1.9 0 0 1-3.4 0l-14.8-24.7a14 14 0 0 0-12-6.8H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM90 120a10 10 0 1 1-10-10a10 10 0 0 1 10 10Zm48 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10Zm48 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z" /></svg>
                <NavLink to="/messages">Messages</NavLink>
            </div>

            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm2.595 7.812a3.51 3.51 0 0 1 0-1.623l-.992-.573l1-1.732l.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573l-1 1.732l-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573l-1-1.732l.992-.572zM18 19.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" /></svg>
                <NavLink to="/admin">Admin</NavLink>
            </div>

            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#fff" d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z" /></svg>
                <NavLink to="/patients">Patients</NavLink>
            </div>

            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4ZM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47Z" /></svg>
                <NavLink to="/settings">Settings</NavLink>
            </div>

            <div className="flex items-center justify-between w-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048"><path fill="white" d="M768 768h128v128H768V768zm384 768h128v128h-128v-128zm384-768h128v128h-128V768zm-384 0h128v128h-128V768zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zm1152 0h128v128h-128v-128zm-384 0h128v128h-128v-128zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zm1152 0h128v128h-128v-128zm-384 0h128v128h-128v-128zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zM2048 128v1792H0V128h384V0h128v128h1024V0h128v128h384zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256H128zm1792 1536V640H128v1152h1792z" /></svg>
                <NavLink to="/calendar">Calendar</NavLink>
            </div>

            <div className="mt-auto">
                <div className="flex items-center justify-between w-36">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><g transform="rotate(180 512 512)"><path fill="white" d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9a353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z" /></g></svg>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;