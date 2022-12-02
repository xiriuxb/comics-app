import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import React, { useState } from "react";

const LoginView=()=>{
    const [password, setPassword] = useState('');

    const handlePssword = (e)=>{
        setPassword(e.target.value);
    }

    async function loginUser(pass) {
        return await axios.post('/api/login',{password:pass}).then( ({data}) =>{
            localStorage.setItem('accessToken', data.token);
            Inertia.visit('/');
        }
            
        ).catch(e=>{
            
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser(password);
    }


    return (
        <>
        <div className="login-view">
            <form action="post" onSubmit={handleSubmit}>
                <input type="text" value={password} onChange={handlePssword} />
                <input type="submit" value="Enviar" title="button"/>
            </form>
        </div>
        </>
    );
}

export default LoginView;