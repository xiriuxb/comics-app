import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import '../../css/imagepage.css';
import Home from "./Home";
import { Inertia } from '@inertiajs/inertia'


const Page = ({ error, url, prev_url, next_url, currentPage, currentIssue, franquicia, serie, prev_issue, next_issue }) => {

    const visitInertiaPrev=()=>{
        Inertia.get(prev_url + `?token=${localStorage.getItem('accessToken')}`);
    }

    const visitInertiaNext=()=>{
        Inertia.get(next_url + `?token=${localStorage.getItem('accessToken')}`);
    }

    const handleKeyUp= (e) =>{
        switch (e.keyCode) {
            case 37:
                visitInertiaPrev();
                break;
            
            case 39:
                visitInertiaNext();
            default:
                break;
        }
    }

    React.useEffect(()=>{
        window.addEventListener('keyup',handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
          };
    },[]);

    return (
            <div id="page">
                <div className="franquicia-nav"><InertiaLink href={'/comics/' + franquicia.path}>{franquicia.nombre}</InertiaLink>
                    {'->'}<InertiaLink href={'/comics/' + franquicia.path + '/' + serie.path}>{serie.nombre}</InertiaLink></div>
                <div className="page-navigation">
                    <button onClick={visitInertiaPrev}>Anterior</button>
                    <div> <span>(Comic: {currentIssue})</span><span>Pg:{_.toNumber(currentPage) + 1}</span></div>
                    <button onClick={visitInertiaNext}>Siguiente</button>
                </div>
                <div className="image-container">
                    <div onClick={visitInertiaPrev} className="prev"></div>
                    <img src={'/api' + url + `?token=${localStorage.getItem('accessToken')}`} alt="" />
                    <div onClick={visitInertiaNext} className="next"></div>
                </div>
                <div className="issue-navigation">
                    {prev_issue !='#' && <InertiaLink href={prev_issue}>Comic Previo</InertiaLink>}
                    <div>(Comic: {currentIssue}) Pg: {_.toNumber(currentPage) + 1} </div>
                    {next_issue !='#' && <InertiaLink href={next_issue}>Comic Siguiente</InertiaLink>}
                </div>
            </div>
    )
}
Page.layout = page => <Home children={page} />
export default Page;