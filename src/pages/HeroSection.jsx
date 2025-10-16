import React from 'react'
import img from '../assets/images/hero-section-img.webp'
import linkedinimg from '../assets/images/linkedin.png'
import dribbleimg from '../assets/images/dribble.png'
import githubimg from '../assets/images/github.png'
import behanceimg from '../assets/images/behance.png'


const HeroSection = () => {
  const contactLinks = [
    { href: 'https://www.linkedin.com/in/aarti-ghorpade-58b844201', img: linkedinimg, alt: 'LinkedIn' },
    { href: 'https://github.com/AartiGhorpade', img: githubimg, alt: 'GitHub' },
    { href: 'https://dribbble.com/artisghorpade', img: dribbleimg, alt: 'Dribbble' },
    { href: 'https://www.behance.net/aartighorpade', img: behanceimg, alt: 'Behance' },
  ];
  return (
    <section className='hero-section' id='home'>
      <div className="container">

        <p className='hero-section-subtitle'>I am  Aarti Ghorpade</p>
        <p className='hero-section-title'>Full Stack Developer &<br />
          UI/UX Designer</p>
        <div className="d-flex gap-5 mt-5">
          {contactLinks.map((contact, index) => (
            <a key={index} href={contact.href} target="_blank">
              <img src={contact.img} alt={contact.alt} className='' />
            </a>
          ))}
        </div>
        <img src={img} alt="" className='img-fluid hero-mob-img' />


      </div>
    </section>
  )
}

export default HeroSection