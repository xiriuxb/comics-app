import React from 'react';
import Home from './Home';
import '../../css/home.css'
import { InertiaLink } from '@inertiajs/inertia-react';

const Listado = ({ listado }) => {
    return (
            <div className='home'>
            <h1>Hello React!</h1>
            <div className='listado-comics'>
                <>
                    {
                        listado.map((superh) => {
                            return <InertiaLink href={'/comics/' + superh.path} key={superh.id}>{superh.nombre}</InertiaLink>
                        })
                    }
                </>
            </div>
        </div>
    );
}

Listado.layout = page => <Home children={page} />
export default Listado;