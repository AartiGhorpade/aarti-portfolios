import React from 'react'

const Experience = () => {
    return (
        <section className='experience-section'>
            <div className="container">
                <p className="section-title">Experience</p>
                <div className="card experience-card">
                    <p className="experience-title mb-0">Associate Software Engineer</p>

                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <span>PHN Technology Pvt Ltd</span>
                        </div>
                        <div className="col-lg-4 col-12 text-lg-end">
                            <span>April 2023 - August 2024</span>
                        </div>
                    </div>

                    <p className='mt-4'>Developed responsive web pages using HTML5, CSS3, Bootstrap, and JavaScript. Created reusable React.js components, reducing development time and improving maintainability.
                        Integrated RESTful APIs for dynamic content, enhancing data retrieval and user interaction.</p>

                </div>
            </div>
        </section>
    )
}

export default Experience