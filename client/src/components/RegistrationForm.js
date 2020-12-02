import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios";

function RegistrationForm() {
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerDepartment, setRegisterDepartment] = useState("");
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");

    const [manager, setValue] = React.useState('manager');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [logInUserName, setlogInUserName] = useState("");
    const [logInPassword, setlogInPassword] = useState("");

    const register = () => {
        // Register new user
        axios({
            method: "POST",
            data: {
                firstName: registerFirstName,
                lastName: registerLastName,
                department: registerDepartment,
                phoneNumber: registerPhoneNumber,
                role: manager,
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
            url: "http://localhost:3001/user",
        }).then((res) => console.log(res));
    };

    return (
        <div className="Registration">
            <div>
                <h1>Register</h1>
                <input placeholder="First Name" onChange={e => setRegisterFirstName(e.target.value)}></input>
                <input placeholder="Last Name" onChange={e => setRegisterLastName(e.target.value)}></input>
                <input placeholder="Department" onChange={e => setRegisterDepartment(e.target.value)}></input>
                <input placeholder="Phone Number" onChange={e => setRegisterPhoneNumber(e.target.value)}></input>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Role</FormLabel>
                    <RadioGroup aria-label="role" name="role1" value={manager} onChange={handleChange}>
                        <FormControlLabel value="manager" control={<Radio color="primary"/>} label="Manager" labelPlacement="start" />
                        <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" labelPlacement="start" />
                    </RadioGroup>
                </FormControl>
                <input placeholder="username" onChange={e => setRegisterUserName(e.target.value)}></input>
                <input placeholder="password" type="password" onChange={e => setRegisterPassword(e.target.value)}></input>
                <button onClick={register}>Register</button>
            </div>

            <div>
                <h1>Login</h1>
                <input placeholder="username" onChange={e => setlogInUserName(e.target.value)}></input>
                <input placeholder="password" type="passowrd" onChange={e => setlogInPassword(e.target.value)}></input>
                <button onClick={login}>Submit</button>
            </div>

            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit</button>
            </div>

        </div >

    )
}

export default RegistrationForm;