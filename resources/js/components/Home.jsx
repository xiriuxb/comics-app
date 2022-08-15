import React, { useEffect } from 'react';
import NavBar from './NavBarComponent';
import '../../css/home.css'

const Home = ({ children }) => {
    return (
        <main className='home'>
            <NavBar></NavBar>
            <article>{children}</article>
        </main>

    );
}

export default Home;