import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import "../../css/navBar.css"

export default function NavBar() {
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
                </ul>
            </div>
        </div>
    );
}