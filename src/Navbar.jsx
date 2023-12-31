import logo from './logo.svg';
import {links,social} from './data';
import {FaBars} from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

export default function Navbar(){
    const [showLinks,setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(()=>{
        // use effect will run whenever there is change in the value showlinks
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }
        else{
            linksContainerRef.current.style.height = '0px';
        }
    },[showLinks])
    return (<nav  id="home" className='nav'>
        <div className="nav-center">
            <div className="nav-header">
                <a href="#home"><img className="logo" src={logo} alt="logo" /></a>
                <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}><FaBars/></button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                    {links.map((link)=>{
                        const {id,url,text} =link;
                        return (
                            <li key={id}><a href={url}>{text}</a></li>
                        )
                    })}
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((socialIcon)=>{
                    const {id,url,icon} = socialIcon;
                    return (
                        <li key={id}><a href={url}>{icon}</a></li>
                    )
                })}
            </ul>
        </div>
    </nav>);
}