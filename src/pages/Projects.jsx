import React, { useState } from 'react'
import bookstoreimg from '../assets/images/bookstore-img.webp'
import sangamimg from '../assets/images/sangam-img.webp'
import dashboardImg1 from '../assets/images/dasboard-img-1.webp'
import dashboardImg2 from '../assets/images/dasboard-img-2.webp'
import dashboardImg3 from '../assets/images/dasboard-img-3.webp'
import technolabimg from '../assets/images/technolab-img.webp'
import furnitureImg from '../assets/images/furniture-webdesign.png'
import cosmeticsimg from '../assets/images/cosmetics-webdesign.png'
import foodlyimg from '../assets/images/foodly-appdesign.png'
import technologyimg from '../assets/images/technology-img.webp'


const Projects = () => {
    const [active, setActive] = useState("Design");

    const designData = [
        {
            img: cosmeticsimg,
            title: "BareGlow Cosmetics Web Design",
            desc: "A website designed to showcase skincare and beauty products with a modern look.",
            link: "https://www.behance.net/gallery/222628291/BareGlow-Cosmetics-Website"
        },
        {
            img: furnitureImg,
            title: "FurniSense Furniture Shop Web Design",
            desc: "A website designed to showcase stylish and functional furniture with a modern touch.",
            link: "https://www.behance.net/gallery/221147847/FurniSense-furniture-shop"
        },
        {
            img: foodlyimg,
            title: "Foodly Food Delivery App Design",
            desc: "A food delivery app design for a smooth and user-friendly ordering experience.",
            link: "https://www.behance.net/gallery/221613181/Foodly-food-delhivery-app"
        }
    ];

    const developmentData = [
        {
            img: technolabimg,
            title: "PHN Techno Lab Website",
            desc: "Developed a website using Html, Css, Javascript, jQuery, Bootstrap",
            link: "https://phntechnolab.com/"
        },
        {
            img: technologyimg,
            title: "PHN TechnoLogy Website",
            desc: "Developed a website using Html, Css, Javascript, jQuery, Bootstrap",
            link: "https://phntechnology.com/"
        },
        {
            img: bookstoreimg,
            title: "Bookstore Management System",
            desc: "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
        },
        {
            img: sangamimg,
            title: "Sangam Multipurpose Hall Website",
            desc: "Developed a responsive website using Html, Css, Javascript, jQuery, Bootstrap, Php, MySql",
        },
        {
            img: dashboardImg1,
            title: "PHN eLearn LMS (multi-role dashboard)",
            desc: "Developed a responsive web application using React.js and Bootstrap.",
        },
        {
            img: dashboardImg2,
            title: "Inventory Management System",
            desc: "Developed a responsive web application using React.js and Bootstrap.",
        },
        {
            img: dashboardImg3,
            title: "Samagra Shiksha LMS (admin-role dashboard)",
            desc: "Developed a responsive web application using React.js and Bootstrap.",
        }
    ];

    return (
        <section className='project-section' id='projects'>
            <div className="container">
                <p className="section-title">Projects</p>

                <div className='project-options'>
                    <span className={`${active === "Design" ? "activeProject" : ""}`} onClick={() => setActive('Design')}>Design</span>
                    <span className={`${active === "Development" ? "activeProject" : ""}`} onClick={() => setActive('Development')}> Development</span>
                </div>
                <div className="row">
                    <div className="row">
                        {(active === "Design" ? designData : developmentData).map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="card project-card">
                                    <img src={item.img} alt={item.title} className="project-image" />
                                    <div className="projectcard-body">
                                        <h5 className="project-title mb-0">
                                            <a href={item.link} target="_blank" className='project-title'>
                                                {item.title}
                                            </a>
                                        </h5>
                                        <p className="project-desc">{item.desc}</p>
                                        {
                                            item.link && <a href={item.link} target="_blank" className="btn view-proj-btn mt-2">
                                                View Project
                                            </a>
                                        }

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects