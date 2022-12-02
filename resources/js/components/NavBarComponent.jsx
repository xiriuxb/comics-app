import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from "axios";
import React from "react";
import "../../css/navBar.css"

export default function NavBar() {
    const logout = ()=>{
        axios.post('/api/logout?token='+localStorage.getItem('accessToken')).then(()=>{
            localStorage.removeItem('accessToken');
            Inertia.visit('/');
        }
            
        )
    }

    return (
        <div id="nav" className="nav">
            <div className="nav-list">
                <ul>
                    <li>
                        <InertiaLink href="/">
                             Inicio
                        </InertiaLink>         
                    </li>
                    <li>
                        <InertiaLink href="/comics">
                            Comics
                        </InertiaLink>
                    </li>
                    <li>
                        <button onClick={logout}>
                            LogOut
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}