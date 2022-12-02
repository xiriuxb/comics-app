import React from 'react';
import Home from './Home';
import '../../css/home.css'
import { InertiaLink } from '@inertiajs/inertia-react';

const Listado = ({ listado }) => {
    return (
        <div className='home'>
            <h1>Comics App</h1>
            <div className='listado-comics'>
                <div className='editorial'>
                    <h3>Marvel</h3>
                    {
                        listado.map((superh) => {
                            return superh.editorial == "Marvel" && <InertiaLink href={'/comics/' + superh.path} key={superh.id}>{superh.nombre}</InertiaLink>
                        })
                    }
                </div>
                <div>
                    <h3>DC</h3>
                    {
                        listado.map((superh) => {
                            return superh.editorial == "DC" && <InertiaLink href={'/comics/' + superh.path} key={superh.id}>{superh.nombre}</InertiaLink>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

Listado.layout = page => <Home children={page} />
export default Listado;