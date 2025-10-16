import React from 'react'
import linkedinimg from '../assets/images/linkedin.png'
import dribbleimg from '../assets/images/dribble.png'
import githubimg from '../assets/images/github.png'
import behanceimg from '../assets/images/behance.png'
import emailimg from '../assets/images/email.png'

const Contact = () => {
    const contactLinks = [
        { href: 'https://www.linkedin.com/in/aarti-ghorpade-58b844201', img: linkedinimg, alt: 'LinkedIn' },
        { href: 'https://github.com/AartiGhorpade', img: githubimg, alt: 'GitHub' },
        { href: 'https://dribbble.com/artisghorpade', img: dribbleimg, alt: 'Dribbble' },
        { href: 'https://www.behance.net/aartighorpade', img: behanceimg, alt: 'Behance' },
        { href: 'aartis.ghorpade@gmail.com', img: emailimg, alt: 'Email' },

    ];

    return (
        <section className='contact-section' id='contact'>
            <div className="container">
                <p className="section-title">Contact Details</p>
                <div className="d-flex gap-3 mt-5">
                    <div className="row">
                        {contactLinks.map((contact, index) => (
                            <div className="col">
                                <a key={index} href={contact.href} target="_blank">
                                    <img src={contact.img} alt={contact.alt} className='' />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
