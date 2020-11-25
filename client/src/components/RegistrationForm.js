import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";

function RegistrationForm() {
    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [logInUserName, setlogInUserName] = useState("");
    const [logInPassword, setlogInPassword] = useState("");

    const register = () => {
        // Register new user
        axios({
            method: "POST",
            data: {
                username: registerUserName,
                password: registerPassword,
            },
            withCredentiasl: true,
            url: "http://localhost:3001/register",
        }).then((res) => console.log(res));
    };

    const login = () => {
        // Login excisting user
        axios({
            method: "POST",
            data: {
                username: logInUserName,
                password: logInPassword,
            },
            withCredentiasl: true,
            url: "http://localhost:3001/login",
        }).then((res) => console.log(res));
    };

    const getUser = () => {
        axios({
            method: "GET",
            withCredentiasl: true,
            url: "http://localhost:3001/getUser",
        }).then((res) => console.log(res));
    };

    return (
        <div className="Registration">
            <div>
                <h1>Register</h1>
                <input placeholder="username" onChange={e => setRegisterUserName(e.target.value)}></input>
                <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}></input>
                <button onClick={register}>Submit</button>
            </div>

            <div>
                <h1>Login</h1>
                <input placeholder="username" onChange={e => setlogInUserName(e.target.value)}></input>
                <input placeholder="password" onChange={e => setlogInPassword(e.target.value)}></input>
                <button onClick={login}>Submit</button>
            </div>

            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit</button>
            </div>

        </div>

    )
}

export default RegistrationForm;