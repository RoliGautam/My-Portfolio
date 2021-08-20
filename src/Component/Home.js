import React from 'react'
import './Home.css'
import './Mediaquery.css'
import myPhoto from './images/my-photo.png'

function Home() {
    return (
        <>
            <div id="home">
                <div className="img">
                    <img src={myPhoto} alt="" id="myimage" />
                </div>

                <div className="myname">
                    <h2 id="myname-text-1">Hello I'm</h2>
                    <h1 id="myname-text-2">Roli Gautam</h1>
                    <br />
                    <div className="wrapper">
                                <div className="static-txt"></div>
                                {/* text for the animation */}
                                <ul className="dynamic-txts">
                                    <li id="dy-li"><span> CODER</span></li>
                                    <li id="dy-li"><span>LEARNER</span></li>
                                    <li id="dy-li"><span>DEVELOPER</span></li>
                                    <li id="dy-li"><span>CONTRIBUTOR</span></li>
                                    <li id="dy-li"><span></span></li>
                                </ul>
                            </div>
                    
                    <br />
                    <br />
                    <button type="button" id="btn-home-res" className="btn my-3 btn-info">
                        <a href="https://drive.google.com/file/d/15vgIOPZH5OsUY2BwPucOHSyZeFmKCMNh/view">Resume</a> </button>
                </div>

            </div>
        </>
    )
}

export default Home
