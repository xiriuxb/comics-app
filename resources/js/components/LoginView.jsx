import React, { useState } from "react";

const LoginView=()=>{
    const [password, setPassword] = useState(0);

    const handlePssword = (e)=>{
        setPassword({password: e.target.value});
    }

    return (
        <div className="login-view">
            <form action="post">
                <input type="text" value={state.password} onChange={handlePssword} />
                <p>{state.password}</p>
                <input type="button" value="Ingresar" />
            </form>
        </div>
    )
}

export default LoginView;