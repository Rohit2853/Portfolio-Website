import { useState } from "react";
import {experience} from "./data";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';
export default function ExperienceComponent(){
    const [index,setIndex] = useState(0);
    const {id,name,role,type,date,info,src} = experience[index];
    const nxtIndex = ()=>{
        let newIndex = index + 1;
        if(newIndex>=experience.length){
            newIndex = 0;
        }
        setIndex(newIndex);
    }
    const prevIndex = ()=>{
        let newIndex = index - 1;
        if(newIndex < 0){
            newIndex = experience.length-1;
        }
        setIndex(newIndex);
    }
    return (<article key={id} className="experience-content">
        <div className="img-container">
            <img className="company-img" src={src} alt={name} />
        </div>
        <h4 className="company-name"><span>{name}</span></h4>
        <div className="dates">
            <p className="role">{role}</p>
            <p className="period">{date}</p>
            <p className="type">{type}</p>
        </div>
        <p className="exp-info">{info}</p>
        <div className="button-container">
            <button className="prev-btn" onClick={prevIndex}>
                <FaChevronLeft/>
            </button>
            <button className="next-btn" onClick={nxtIndex}>
                <FaChevronRight/>
            </button>
        </div>
    </article>);
}