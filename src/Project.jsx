import { useState,useEffect } from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {Projects} from "./data"
export default function Project(){
    const [value,setValue] = useState(0);
    const {id,name,tech,info,date} = Projects[value];
    return (<section id="projects" className="project">
        <h2>Projects</h2>
        <div className="underline"></div>
        <div className="project-center">
            <div className="project-btn-container">
                {Projects.map((proj,index)=>{
                    return (
                        <button key={proj.id}
                        onClick={()=>setValue(index)}
                        className={`project-btn ${index==value && 'active-btn'}`}>
                            {proj.name}
                        </button>
                    )
                })}
            </div>
            <article className="project-info">
                <h3>{name}</h3>
                <h4 className='project-tech'>{tech}</h4>
                <p className='project-date'>{date}</p>
                {info.map((proj,index)=>{
                    return <div key={index} className='project-desc'>
                        <FaAngleDoubleRight className='project-icon'></FaAngleDoubleRight>
                        <p>{proj}</p>
                    </div>
                })}
            </article>
        </div>
    </section>);
}