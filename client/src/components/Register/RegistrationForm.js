import React, { useState } from "react";
import { Redirect } from 'react-router'
// import { Link } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios";

function RegistrationForm() {
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerDepartment, setRegisterDepartment] = useState("");
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
    const [registerAddress, setRegisterAddress] = useState("");
    const [registerEmail, setRegisterEmail] =useState("");

    const [manager, setValue] = React.useState('manager');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [logInUserName, setlogInUserName] = useState("");
    const [logInPassword, setlogInPassword] = useState("");

    const [data, setData] = useState(null);

    const register = () => {
        // Register new user
        axios({
            method: "POST",
            data: {
                firstName: registerFirstName,
                lastName: registerLastName,
                department: registerDepartment,
                phoneNumber: registerPhoneNumber,
                address: registerAddress,
                email: registerEmail,
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
        }).then((res) => { if (res.data === "User Authenticated!")  {setData(true)}});
    };

    // const getUser = () => {
    //     axios({
    //         method: "GET", 
    //         params: {
    //             username: logInUserName
    //         },
    //         withCredentiasl: true,
    //         url: "http://localhost:3001/user",
    //     }).then((res) => setData(res.data));
    // };


    return (
        <div className="Registration">
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper >
                        {data && <Redirect to="/MainPage" />}
                        <h1>Register</h1>
                        <input placeholder="First Name" onChange={e => setRegisterFirstName(e.target.value)}></input>
                        <input placeholder="Last Name" onChange={e => setRegisterLastName(e.target.value)}></input>
                        <input placeholder="Department" onChange={e => setRegisterDepartment(e.target.value)}></input>
                        <input placeholder="Phone Number" onChange={e => setRegisterPhoneNumber(e.target.value)}></input>
                        <input placeholder="Address" onChange={e => setRegisterAddress(e.target.value)}></input>
                        <input placeholder="Email" onChange={e => setRegisterEmail(e.target.value)}></input>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Role</FormLabel>
                            <RadioGroup aria-label="role" name="role1" value={manager} onChange={handleChange}>
                                <FormControlLabel value="manager" control={<Radio color="primary" />} label="Manager" labelPlacement="start" />
                                <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" labelPlacement="start" />
                            </RadioGroup>
                        </FormControl>
                        <input placeholder="username" onChange={e => setRegisterUserName(e.target.value)}></input>
                        <input placeholder="password" type="password" onChange={e => setRegisterPassword(e.target.value)}></input>
                        <Button variant="contained" color="primary" onClick={register}>Register</Button>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper>
                        <h1>Login</h1>
                        <input placeholder="username" onChange={e => setlogInUserName(e.target.value)}></input>
                        <input placeholder="password" type="password" onChange={e => setlogInPassword(e.target.value)}></input>
                        <Button variant="contained" color="primary" onClick={login}>Login</Button>
                        {/* {data ? <h1> Welcome Back {data[0].firstName} </h1> : null} */}
                    </Paper>
                </Grid>

                {/* <Grid item xs={4}>
                    <Paper>
                        <h1>Get User</h1>
                        <Button variant="contained" color="primary" onClick={getUser} >Submit</Button>
                        {data ? <h1> Welcome Back {data[0].firstName}</h1> : null}
                    </Paper>
                </Grid> */}
            </Grid>
        </div>

    )
};

export default RegistrationForm;