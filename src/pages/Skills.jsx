import React from 'react'
import htmlimg from '../assets/images/html.webp'
import cssimg from '../assets/images/css.webp'
import jsimg from '../assets/images/js.webp'
import jqueryimg from '../assets/images/jquery.webp'
import bootstrapimg from '../assets/images/bootstrap.webp'
import tailwindimg from '../assets/images/tailwind.webp'
import reactimg from '../assets/images/react.webp'
import reduximg from '../assets/images/redux.webp'
import javaimg from '../assets/images/java.webp'
import mysqlimg from '../assets/images/mysql.webp'
import wordpressimg from '../assets/images/wordpress.webp'
import wiximg from '../assets/images/wix.webp'
import framerimg from '../assets/images/framer.webp'
import webdesignimg from '../assets/images/webdesign.webp'
import appdesignimg from '../assets/images/appdesign.webp'
import canvaimg from '../assets/images/canva.webp'
import nodeimg from '../assets/images/node.png'
import expressimg from '../assets/images/express.png'
import mongoimg from '../assets/images/mongodb.png'
import phpimg from '../assets/images/php.png'



const Skills = () => {
    const skillsData = [
        htmlimg, cssimg, jsimg, jqueryimg,phpimg,
        bootstrapimg, tailwindimg, reactimg, nodeimg, expressimg, mongoimg, reduximg,
        javaimg, mysqlimg, wordpressimg, wiximg,
        framerimg, webdesignimg, appdesignimg, canvaimg
    ];

    return (
        <section className='skills-section' id='skills'>
            <div className="container">
                <p className="section-title">Technical Skills & Tools</p>
                <div className="row mt-4">
                    {
                        skillsData.map((data, ind) => (
                            <div className="col-lg-2 col-4 mt-5 text-center" key={ind}>
                                <img src={data} alt="" className='w-50' />
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Skills