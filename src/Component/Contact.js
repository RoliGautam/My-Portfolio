import React from 'react';
import linkedin from './images/linkedin.png';
import facebook from './images/fb.png';
import github from './images/github.png';
import twitter from './images/twitter.png';
import dev from './images/dev.png'
import insta from './images/insta.png'
import './Contact.css'

function Contact() {
    return (
        <>



            <section id="foo">
                <div className="item-foo">
                    <h1 id="achiev-head">Connect with me</h1>

                    <br /> <br />
                    <h5>✉  roligautam118@gmail.com
                    </h5>

                    {/* <i class='fas fa-map-marker-alt'></i> */}
                    <h5> Location :  Barabanki, Uttar Pradesh, India</h5>
                    <br />
                    <br />
                    <ul className="social">
                        <li>
                            <a className="footer-img" href="https://www.linkedin.com/in/roli-gautam4/" ><img src={linkedin} alt="LINKEDIN" /></a>
                        </li>
                        <li>
                            <a className="footer-img" href="https://github.com/RoliGautam" ><img src={github} alt="GITHUB" className="border-img" /></a>
                        </li>
                        <li>
                            <a className="footer-img" href="https://twitter.com/RoliGautam3?s=08" ><img src={twitter} alt="TWITTER" /></a>
                        </li>

                        <li>
                            <a className="footer-img" href="https://dev.to/roligautam" ><img src={dev} alt="DEV" className="border-img" /></a>
                        </li>
                        <li>
                            <a className="footer-img" href="https://www.facebook.com/roli.gautam.5473" ><img src={facebook} alt="FACEBOOK" /></a>
                        </li>
                        <li>
                            <a className="footer-img" href="https://www.instagram.com/roligautam.10.07/" ><img src={insta} alt="INSTAGRAM" /></a>
                        </li>


                    </ul>
                  

                </div>
            
            </section>
            
            <section className="end">
                        
                        <p> &copy; August, 2021 </p>
                        
                    </section>


        </>
    )
}

export default Contact
