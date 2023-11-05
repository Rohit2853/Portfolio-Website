import ExperienceComponent from "./ExperienceComponent";
export default function Experience(){
    return (
        <section id="experience" className="experience">
            <div className="exp-container">
                <div className="title">
                    <h2>Experiences</h2>
                    <div className="underline"></div>
                </div>
                <ExperienceComponent/>
            </div>
            
        </section>
    );
}