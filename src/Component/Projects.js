import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
            <div className="project" id="projects">
                <h3 className="head">Projects</h3>
                <div className="row">
                    <div className="mid pro">
                        <h4>Covid-19</h4>
                        <p className="achieve-para">
                            <li>My intension to build this project is to create awareness about Corona among the people and to provide necessary information related to Covid-19.</li>
                            <li>It provide all the information about Symptoms, Precaustion, Vaccination and  Pandemic situation.</li>
                            <li>I also added Covid-19 Live Tracker to track the cases in different countries.</li>
                        </p>
                        <a className="btn btn-outline-danger mx-3" href="https://github.com/RoliGautam/Covid-19">View Git Repo</a>
                        <a className="btn btn-outline-danger" href="https://covid-19-sources.herokuapp.com/">Live Project</a>
                    </div>

                    <div className="left pro">
                        <h4>Dynamic Banking Website</h4>
                        <p className="achieve-para">
                            <li> This is a banking website, which I build during my internship.</li>
                            <li>In this, We can Create New User, Transfer money between two users and check Transaction History.</li>
                            <li>I used HTML, CSS, JS, PHP, MYSQL, and BOOTSTRAP to build this project.</li>
                        </p>
                        <a className="btn btn-outline-danger" href="https://github.com/RoliGautam/Basic-Banking-Website">View Git Repo</a>
                    </div>

                    <div className="mid pro">
                        <h4>KNIT Website Design</h4>
                        <p className="achieve-para">
                            <li>This is a static website design of my college.</li>
                            <li>I added some pages : Home, About, Our Director, Courses, Contact, Registration pages.</li>
                            <li>This was my first projects in web development. </li>
                            <li>Tech used : HTML, CSS</li>
                        </p>
                        <a className="btn btn-outline-danger" href="https://github.com/RoliGautam/KNIT-Website-Design">View Git Repo</a>
                    </div>

                    <div className="right pro">
                        <h4>Court Counter Android App </h4>
                        <p className="achieve-para">
                            <li>This is an android app which counts the marks of the two teams A and B.</li>
                             <li>We can also refresh our marks and add marks.</li>
                             <li> I used the nested view groups, implement more than one activity, change the colour of ’action bar’ and the Toast for different works in this app.</li>
                        </p>
                        <a className="btn btn-outline-danger" href="https://github.com/RoliGautam/Court-Counter-Android-App">View Git Repo</a>
                    </div>
                </div>

                <div className="row">
                    <div className="left pro">
                        <h4>Images Capture Android App </h4>
                        <p className="achieve-para">
                            <li> It is a simple image capturing application to click images.</li>
                            <li>This app will go through all the cameras available in your phone. </li>
                            <li> It will give you option to choose your favourite camera. After that it will capture the image by that camera</li>
                            <li>I implemented the implicit-intent to build this app.</li>
                        </p>
                        <a className="btn btn-outline-danger" href="https://github.com/RoliGautam/image-capture-app">View Git Repo</a>
                    </div>

                    <div className="mid pro">
                        <h4>Translator App </h4>
                        <p className="achieve-para">
                            <li> This is a simple translator app which provide us translation of spanish into english. </li>
                            <li> Addes  some Spanish words, phrases and counts and their English translation are available in this app.</li>
                            <li>There are four activities for different categories. </li>
                        </p>
                        <a className="btn btn-outline-danger" href="https://github.com/RoliGautam/Translator-App">View Git Repo</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Projects
