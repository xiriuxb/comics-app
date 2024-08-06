import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from "axios";
import React from "react";

export default function NavBar() {
    const logout = () => {
        axios
            .post("/api/logout?token=" + localStorage.getItem("accessToken"))
            .then(() => {
                localStorage.removeItem("accessToken");
                Inertia.visit("/");
            });
    };

    return (
        <nav className="h-10">
            <div className="flex bg-tomato h-full px-2">
                <ul className="flex flex-1 h-full items-center">
                    <li>
                        <InertiaLink
                            className="hover:bg-slate-600/30 p-2"
                            href="/"
                        >
                            Inicio
                        </InertiaLink>
                    </li>
                    <li>
                        <InertiaLink
                            className="hover:bg-slate-600/30 p-2"
                            href="/comics"
                        >
                            Comics
                        </InertiaLink>
                    </li>
                </ul>
                <ul className="flex h-full items-center">
                    <li>
                        <InertiaLink
                            className="hover:bg-slate-600/30 p-2"
                            href="/login"
                        >
                            Login
                        </InertiaLink>
                    </li>
                    <li>
                        <button onClick={logout}>LogOut</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
