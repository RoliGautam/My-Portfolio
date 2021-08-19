import React from 'react';
import './Experiences.css';
import Spark from './images/spark.png';
import Spark_Selection from './images/spark_selection.png';
import Gsco from './images/gsco.png';
import Let_Grow from './images/let_grow.png';
import SWOC from './images/swoc.png'
import Script_foun from './images/script-foun.png'


function Experience() {
    return (
        <>
            <section id="experience">
                <h1>Experiences</h1>
                <br /><br />
                <div className="wor_experi">
                    <h2 className="who">Work Experience</h2>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> Web Development and Designing Intern at <a href="#">The Sparks Foundation</a> </h4><em>(March 2021 - April 2021)</em>
                            <p className="card-text project-txt"> <br />
                                <li>During this internship, I created a project of <span>
                                    Banking Website
                                </span></li>
                                <li>Features of this project are : Create New User, Show
                                    Transaction History, Transfer Money between Two Users
                                </li>
                                <li>
                                    Tech Used : HTML, CSS, JS, PHP, MYSQL, BOOTSTRAP

                                </li>

                            </p>
                            <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal">
                                Views Certificate
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Certificate</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img className="model_img" src={Spark} alt="" />
                                            <img className="model_img" src={Spark_Selection} alt="" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />


                <div className="open_source">
                    <h2 className="who">Open Source Contribution</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">1) <a href="#">GSSOC’21, GirlScript Summer of Code</a>
                                <em>(February 2021 - Present)</em>
                            </h5>
                            <p className="card-text">


                                <li>It was a three month long open-source program and I contributed as a participants in this program.</li>
                                <li>I contributed in
                                    <a href="https://github.com/RoliGautam/makesmatheasy"> Makes Math Easy</a>  project and solved 5% issues
                                </li>
                                <li>It is web app to solve maths related problems and to provide information about different maths topics to help students to be good in maths.</li>
                                <li> Tech Used : HTML and CSS
                                </li>
                            </p>
                            <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal1">
                                Views Certificate
                            </button>
                            <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Certificate</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img className="model_img" src={Gsco} alt="" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title"><h5>
                                2) <a href="https://letsgrowmore.in/">Lets Grow More Summer of Code</a><em>(May 2021 - July 2021)</em></h5>

                                <p className="card-text">

                                    <li>It was 2 month long open-source program.</li>
                                    <li>I made contribution in <a href="https://github.com/Ayush7614/Daily-Coding-DS-ALGO-Practice">Daily-Coding-DS-ALGO-Practice</a> project</li>
                                    <li>This project is about to help student to understand diffrent data structure and algorithm concepts. </li>
                                    <li>It includes most of the coding question asked in interviews and coding rounds. A good amont of question are available on every topic of DSA in this project.</li>
                                    <li>Tech Used : C++ and DSA and solved 5% issue</li>
                                </p>
                                <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal2">
                                    Views Certificate
                                </button>
                                <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Certificate</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <img className="model_img" src={Let_Grow} alt="" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">3) <a href="https://sfp.scriptindia.org/">SCRIPT FELLOWSHIP PROGRAM</a> <em>(August 2021 - Present)</em>  </h5>
                            <p className="card-text">
                                <li>One of 200 Fellows selected for the SFP’21 three month long open-source program.</li>
                                <li>I am working on Hackov8 project in frontend part and learning a lot of new things.</li>
                                <li>Tech Used : HTML, CSS, JS, REACTJS</li>
                            </p>
                            <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal3">
                                Views Certificate
                            </button>
                            <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Certificate</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img className="model_img" src={Script_foun} alt="" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                4) Participants as SWOC, <a href="https://swoc.tech">Script Winter of Code</a> (January 2021 - February 2021) </h5>
                            <p className="card-text">
                                <li>It was my first open-souce program. I started my Open-source journey with this program</li>

                                <li>
                                    Script Winter of Code is an open-source program envisioned by the Script Foundation for students to get them into the world of open source development.
                                </li>

                                <li>
                                    I contributed in the projects as a participants under the guidence of mentors
                                </li>
                            </p>
                            <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal4">
                                Views Certificate
                            </button>
                            <div className="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Certificate</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img className="model_img" src={SWOC} alt="" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="community_experi">
                    <h2 className="who">Community Experiences</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">1) Mentor of UP-Chapter at <a href="http://thegirlcode.co/">The Girl Code</a> <em>(August 2021 - Present) </em> </h5>
                            <p className="card-text">

                                Its a community for the students to build their interest into technology field.
                                It inspire girls to discover and pursue a degree in technical field.
                                It aim to introduce young students to the programming by conduction workshops on different tech fields. I am working here as a mentor of my state UP chapter. My domain is web development, so I tech students about frontend web development.


                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">2). Core Member of <a href="">
                                Bridge The Gap - KNIT Sultanpur  </a><em>(April 2021 - Present)</em>  </h5>
                            <p className="card-text">
                                I ,with the team, inagurated this community to share my knowledge and to create awareness among the stuends of my college.
                                The main goal of this community is to aware the students from the different opportunities, open source programs etc. We provide mentorship and guidance to the students by conducting sessions etc.
                                We share different opportunities by
                                <a href="mailto:bridgethegap@knit.ac.in"> this mail</a>.



                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">3). Co-Executives of <a href="https://www.facebook.com/isteknit/">Indian Society for Technical Education (ISTE) - KNIT Sultanpur Chapter </a>
                                <em> (March 2021 - Present)</em>
                            </h5>
                            <p className="card-text">
                                It is a technical forum that provides quality training programs to update our knowledge and skills in the technical field.

                                The aim of this council is to provide students competitive environment and to
                                conduct workshop on different technical topics.
                                I hosted 3 Days workshop on cybersecurity with 300+ students.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">4). Co-Executives of <a href="https://www.facebook.com/iei.knit/##_=_">Institution of Engineers India(IEI) - KNIT Chapter </a>
                                <em>(March 2021 - Present)</em> </h5>
                            <p className="card-text">

                                This forum is associated with the Institution of Engineers, India. It is one of the technical council of my college.
                                This forum provides a college-level platform that facilitates and encourages students for their technical skills. IEI forum has been conducting some interesting yet fruitful and practical events for students. The forum has also been encouraging students to bring up their technical projects and ideas and help them by providing fund.</p>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">5) Core-Member of <a href="https://www.facebook.com/literarycouncil/">Literary Council - KNIT Sultanpur</a> <em>(April 2021 - Present) </em></h5>
                            <p className="card-text">

                                The goal of this council is to promote literature, creativity, and awareness among the KNIT students by organizing and conducting several events, competitions, and other literary functions. Recently, we conducted a comptition of debate. It was 3 days long event. We conduct events related to poetry writing, debate competition, story writing, and many more events in these clubs.
                            </p>
                        </div>
                    </div>
                    <br />

                </div>
            </section>
        </>
    )
}

export default Experience
