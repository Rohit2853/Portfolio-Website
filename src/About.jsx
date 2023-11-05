import { useState } from 'react';
import {about} from './data';

export default function About(){
    const [readMore,setReadMore] = useState(true);
    const{id,src,name,info} = about[0];
    return <section id="about" className="about">
        <div className="about-content">
            <div className="profile-photo">
                <img src={src} alt="Photo" />
            </div>
            <div className="info">
                <p className="about-text">{readMore?`${info.substring(0,200)}...`:info}
                <button onClick={()=>setReadMore(!readMore)}>{readMore?"ReadMore":"ShowLess"}</button></p>
            </div>
        </div>
        
    </section>
}