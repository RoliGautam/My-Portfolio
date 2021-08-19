import React from 'react';
import './About.css';
import About_Roli_Img from './images/roli-about-img.jpeg';

function About() {
    return (
        <>
            <section id="about">
                <h1>About Me</h1>
                <h3 className="who">Who am I ?</h3>
                <br /><br />
                <div className="about-box">
                    <div className="about-box-left">
                        <div className="about-name">I'm
                        <span id="my-name-about"> Roli Gautam</span>, prefinal year student!
                        </div>
                        <p>
                            I love to explore different things and to empower others. I am a
                            <a href="https://ghc.anitab.org/attend/scholarships/" className="hightlight"> GHC'21 Scholar</a>,
                            where I was one of the 250 Indian students. I am passionate about open-source, coding and development. Besides this, I also like to mentor and guide to the students. I'm a very curious, hardworking, and passionate girl toward my work and try to locate opportunities. My passion for learning makes me better every day. My motivation quote is <strong>"Never give up because great things always takes time".</strong>
                        </p>
                    </div>
                    <div className="about-box-right">
                        <img id="about-box-right-img" src={About_Roli_Img} alt={About_Roli_Img} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
