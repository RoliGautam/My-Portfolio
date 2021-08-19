import React from 'react';
import './Skills.css';
import C from './images/c.png';
import CPlusPlus from './images/c++.png';
import Java from './images/java.png';
import DSA from './images/dsa.png';
import HTML from './images/html.png';
import CSS from './images/css.png'
import JS from './images/js.png'
import React_Img from './images/react.png'
import Bootstrap from './images/boot.png'
import Git from './images/git.png'
import GitHub from './images/github.png'

function Skills() {
    return (
        <>
            <section id="skills">
                <h1>Skills</h1>
                <br /><br />
                <div className="programming">
                    <h2 className="who">Programming Skills</h2>
                    <br /><br />
                    <div className="programming_skills">
                        <img className="programming_skills_img" src={C} alt={C} />
                        <img className="programming_skills_img" src={CPlusPlus} alt={CPlusPlus} />
                        <img className="programming_skills_img" src={Java} alt={Java} />
                        <img className="programming_skills_img" src={DSA} alt={DSA} />
                    </div>
                </div>
                <br />
                <div className="development">
                    <h3 className="who">Development Skills</h3>
                    <br /><br />
                    <div className="programming_skills">
                        <img className="programming_skills_img" src={HTML} alt={HTML} />
                        <img className="programming_skills_img" src={CSS} alt={CSS} />
                        <img className="programming_skills_img" src={JS} alt={JS} />
                        <img className="programming_skills_img" src={React_Img} alt={React_Img} />
                    </div>
                </div>
                <br />
                <div className="miscellanous">
                    <h3 className="who">Miscellanous Skills</h3>
                    <br /><br />
                    <div className="programming_skills">
                        <img className="programming_skills_img" src={Bootstrap} alt={Bootstrap} />
                        <img className="programming_skills_img" src={Git} alt={Git} />
                        <img className="programming_skills_img" src={GitHub} alt={GitHub} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
