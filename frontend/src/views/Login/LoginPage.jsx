import React, { useState } from "react";
import Axios from 'axios';
import Header from "../../components/Header";
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    const navigate = useNavigate();

    const [username_input, setUsername] = useState("");
    const [password_input, setPassword] = useState("");

    const [showError, setShowError] = useState(false);

    const loginSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/login", {
            username: username_input,
            password: password_input,
        }).then((response) => {
            if (response.data.error) {
                return setShowError(true);
            }
            else{
                setShowError(false);
                localStorage.setItem("token", response.data.message[0].adminID); 
                localStorage.setItem("username", response.data.message[0].username); 
                navigate("../dashboard");
            }
            
        }).catch((error) => {
            
        })
    }

    return (
        <>
            <Header />
            <main className="h-[calc(100vh_-_3.5rem)] w-3/12 m-auto flex items-center justify-center ">
                <section className="gap-6 w-full shadow-md p-6">
                    <h1 className="font-semibold text-center text-3xl my-6">Sign In</h1>
                    <p className={showError ? 'text-red-400' : ''}>{showError && "NO account found"}</p>
                    <div className="flex items-center justify-center flex-col gap-6">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username_input}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            className="w-full outline-none px-4 py-2 rounded-md border border-[#0AC1C9] focus:bg-sky-100 transition-all delay-75 ease-in"
                        />
                        <input
                            type="password"
                            placeholder="Enter you password"
                            value={password_input}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            className="w-full outline-none px-4 py-2 rounded-md border border-[#0AC1C9] focus:bg-sky-100 transition-all delay-75 ease-in"
                        />

                        <Link className="text-[#0AC1C9] ml-auto" to="/forgotpassword">Forgot Password?</Link>
                        <button
                            className="w-full p-3 rounded bg-[#0AC1C9] text-white font-semibold hover:bg-[#24d8e2] transition-all duration-200 ease-in outline-none "
                            onClick={loginSubmit}>
                            Login
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
}

export default LoginPage;
