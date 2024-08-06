import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import Home from "./Home";

const Series = ({ series, superh }) => {
    return (
        <div id="series" className="listado-comics">
            <>
                {series.map((serie) => {
                    return (
                        <InertiaLink
                            key={serie.id}
                            href={"/comics/" + superh + "/" + serie.path}
                        >
                            {serie.nombre}
                        </InertiaLink>
                    );
                })}
            </>
        </div>
    );
};

Series.layout = (page) => <Home children={page} />;

export default Series;
