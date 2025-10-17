import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import bookstoreimg from '../../../../public/images/bookstore-img.webp'
import sangamimg from '../../../../public/images/sangam-img.webp'
import dashboardImg1 from '../../../../public/images/dasboard-img-1.webp'
import dashboardImg2 from '../../../../public/images/dasboard-img-2.webp'
import dashboardImg3 from '../../../../public/images/dasboard-img-3.webp'
import technolabimg from '../../../../public/images/technolab-img.webp'
import furnitureImg from '../../../../public/images/furniture-webdesign.png'
import cosmeticsimg from '../../../../public/images/cosmetics-webdesign.png'
import foodlyimg from '../../../../public/images/foodly-appdesign.png'
import technologyimg from '../../../../public/images/technology-img.webp'
import Link from 'next/link';

export default function Development() {
    const projects = [

        {
            img: bookstoreimg,
            title: "Bookstore Management System",
            desc: "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: false
        },
        {
            img: sangamimg,
            title: "Sangam Multipurpose Hall Website",
            desc: "Developed a responsive website using Html, Css, Javascript, jQuery, Bootstrap, Php, MySql",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: false
        },
        {
            img: dashboardImg1,
            title: "PHN eLearn LMS (multi-role dashboard)",
            desc: "Developed a responsive web application using React.js and Bootstrap.",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: false
        },
        {
            img: dashboardImg2,
            title: "Inventory Management System",
            desc: "Developed a responsive web application using React.js and Bootstrap.",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: false
        },
        {
            img: dashboardImg3,
            title: "Samagra Shiksha LMS (admin-role dashboard)",
            desc: "Developed a responsive web application using React.js and Bootstrap.",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: false
        },
        {
            img: technolabimg,
            title: "PHN Techno Lab Website",
            desc: "Developed a website using Html, Css, Javascript, jQuery, Bootstrap",
            link: "https://phntechnolab.com/",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: true
        },
        {
            img: technologyimg,
            title: "PHN TechnoLogy Website",
            desc: "Developed a website using Html, Css, Javascript, jQuery, Bootstrap",
            link: "https://phntechnology.com/",
            technologies: "Node - Express - SMPP - Postgress - Kafka - Elastic Search",
            externalLink: true
        },
    ];

    return (
        <section>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden hover:bg-zinc-750 transition-colors group p-4 md:p-6 border border-gray-500">
                            {/* Project Image */}
                            <div className="h-[250px] md:h-[200px]">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={0}
                                    height={0}
                                    className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="mt-8">
                                {/* Title and External Link Icon */}
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-white font-medium">
                                        {project.title}
                                    </h3>
                                    {project.externalLink && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center">
                                            <ExternalLink className="w-5 h-5 cursor-pointer text-zinc-400 flex-shrink-0 ml-2 hover:text-zinc-200 transition-colors" />
                                        </Link>
                                    )}
                                </div>

                                {/* Technologies */}
                                {/* <p className="text-blue-400 text-sm mb-4 font-medium">
                                    {project.technologies}
                                </p> */}

                                {/* Description */}
                                <p className="text-zinc-300 leading-relaxed mb-4">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}