import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import Home from "./Home";

const serie = ({ issues, franquicia }) => {
    return (
            <div id="serie" className="listado-comics">
                <InertiaLink href={'/comics/' + franquicia.path}>{franquicia.nombre}</InertiaLink>
                <>
                    {
                        issues.map(
                            (issue) => {
                                return <InertiaLink key={issue.number} href={'/' + issue.path + '/0?token='+localStorage.getItem('accessToken')}>{issue.number}</InertiaLink>
                            }
                        )
                    }
                </>
            </div>
    )
}
serie.layout = page => <Home children={page} />
export default serie;