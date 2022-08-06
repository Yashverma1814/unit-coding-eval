import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom'
import { loginSuccess } from '../Redux/action';

export const Login = () => {

    const [ema, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [tokens, setTokens] = useState("");
    const dispatch = useDispatch();
    const token = useSelector((state) => state.loginReducer.token);
    if (token === "QpwL5tke4Pnpja7X4") {
        return <Navigate to="/" />
    }
    const handleLogin = () => {
        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: {
                email: ema,
                password: pass
            }
        }).then(res => {
            setTokens(res.data.token)
        }).catch(err => console.log(err))
        dispatch(loginSuccess(tokens));
    }

    return (
        <div>

            <TextField value={ema} onChange={(e) => setEmail(e.target.value)} label='Email' variant="outlined" />
            <br />
            <TextField value={pass} onChange={(e) => setPass(e.target.value)} label="Password" type='password' variant="outlined" />
            <br />
            <Button variant="contained" color="success" onClick={() => handleLogin()}>
                LOGIN
            </Button>
            <br /><br />
        </div>
    )
}