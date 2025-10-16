import React from 'react'
import img from '../assets/images/hero-section-img.webp'
const About = () => {
    return (
        <section className='about-section' id='about'>
            <div className="container">

                <div className="row">
                    <div className="col-lg-8">
                        <p className="section-title">About Me</p>
                        <p className='body-font about-details'>I am Aarti Ghorpade, a Frontend Developer with 1.5 years of experience in building responsive and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, React js, Node js,Express js,Mongo Db, Bootstrap, Tailwind CSS, and Redux Toolkit. I also have knowledge of UI/UX design, including wireframing and prototyping with Figma.</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={img} alt="" className='hero-section-img' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About