import React from 'react';
import './Achievements.css';
import HTML from './images/html.png'
import ghc from './images/ghc.jpeg'
import scriptfellow from './images/script.png'
import cloud from './images/cloud.jpeg'
import udacity from './images/udacity.jpeg'
import blog from './images/top7.jpeg'
import algo from './images/algomadeeasy.jpeg'
import topper from './images/topper.jpeg'
import outreach from './images/outreach.jpeg'



function Achievements() {
    return (
        <>

            <section id="achievements">
                <h1 id="achiev-head">Achievements</h1>
                <div className="achiev-box">
                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={ghc} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6 >GHC'21 SCHOLAR</h6>
                            <p className="achieve-para">
                                One of the 250 Indian students to be awarded the
                                <a href="https://ghc.anitab.org/attend/scholarships/">
                                    Grace Hopper Celebration 2021 Scholarship </a>
                                by <a href="https://anitab.org/"> AnitaB.org </a>
                                to attend the world’s largest women in tech conference held in the USA.
                            </p>
                        </div>
                    </div>


                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={scriptfellow} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6 >SCRIPT FELLOW'21</h6>
                            <p className="achieve-para">
                                One of 200 Fellows selected for the Script Fellowship Program
                                by <a href="https://www.linkedin.com/company/scriptfoundation/"> Script Foundation </a>. It's a three month long open souce program.
                            </p>

                        </div>
                    </div>

                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={cloud} alt={HTML} />
                        </div>
                        <div className="achiev_1_content ">
                            <h6>Google Cloud Ready Faciliator Program</h6>

                            <p className="achieve-para">
                                One of the students to get selected for the
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6830862982474551296/"> Google Cloud Computing Foundation Course </a>
                                to get training by the google experts on cloud Computing field.
                            </p>
                        </div>
                    </div>

                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={udacity} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6>Bertelsmann Technology Scholar'20</h6>
                            <p className="achieve-para"> Selected for the Bertelsmann Technology Scholarship by the <a href=""> udacity. </a>This scholarship was for a Nanodegree Course of Udacity on AI.
                            </p>
                        </div>
                    </div>

                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={blog} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6>Top-7 Author</h6>
                            <p className="achieve-para">
                                My first Blog on <a href="https://dev.to/roligautam/how-to-make-your-first-contribution-to-open-source-a-beginner-s-guide-2cni"> Open Source </a> got
                                featured by <a href="https://twitter.com/ThePracticalDev/status/1420513150814855168"> DEV Community </a> and I’m one of the
                                <a href="https://twitter.com/ThePracticalDev/status/1422970090522349572"> Top 7</a> authors.
                                This blog will help beginners to start their open souce journey.
                            </p>

                        </div>
                    </div>
                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={algo} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6>Algorithm Made Easy</h6>
                            <p className="achieve-para">
                                One of 4 students out of 109 to get featured by
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6797796539210231808"> Algorithm Made Easy </a>
                                for completing 10days30problems
                                Challenge. This was really a good Challenge for me to build my consistency.

                            </p>
                        </div>
                    </div>
                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={topper} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6>
                                Intermediate Topper - UP Board 2018
                            </h6>
                            <p className="achieve-para">
                                5th rank holder out of
                                30,17,032 students in Uttar
                                Pradesh and 3rd rank holder among 1,88,650 students in my district. 
                            </p>


                        </div>
                    </div>
                    <div className="achiev-1">
                        <div className="achiev_1_img">
                            <img src={outreach} alt={HTML} />
                        </div>
                        <div className="achiev_1_content">
                            <h6>Education Outreach Scholar</h6>
                            <p className="achieve-para">
                                I get selected for the educational scholarship by the <a href="https://www.linkedin.com/company/girlscript-foundation/"> GirlScript Foundation </a>. It gives me a chance to learn about User Interface Development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievements
