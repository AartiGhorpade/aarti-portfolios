"use client";
import Image from "next/image";
import heroImg from '../../../../public/images/hero-section-img.jpeg'
import { FaEnvelope, FaGithub, FaLinkedin, FaBehance, FaDribbble } from "react-icons/fa";
import Link from "next/link";

export default function About() {
    const socialData = [
        {
            icon: <FaEnvelope size={24} />,
            link: "mailto:aartis.ghorpade@gmail.com",
        },
        {
            icon: <FaGithub size={24} />,
            link: "https://github.com/yourusername",
        },
        {
            icon: <FaLinkedin size={24} />,
            link: "https://www.linkedin.com/in/yourusername",
        },
        {
            icon: <FaBehance size={24} />,
            link: "https://www.behance.net/yourusername",
        },
        {
            icon: <FaDribbble size={24} />,
            link: "https://dribbble.com/yourusername",
        },
    ];

    return (
        <section className="relative text-white py-16 container overflow-hidden">
            {/* Background gradient */}
            <div className="bg-gradient-to-tr from-[#1B0533] to-[#041E47] backdrop-blur-md rounded-br-[100px] rounded-tl-[100px] px-12 py-20 md:p-20">
                <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-400 text-white text-xl font-semibold px-6 py-1 rounded-full shadow-lg mb-4">
                    About me
                </div>
                <div className="relative z-10 grid lg:grid-cols-12 grid-cols-1 gap-y-10">

                    <div className="space-y-6 lg:col-span-7">

                        <p className="text-gray-300 text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px] 4xl:text-[22px] leading-relaxed mt-6">
                            Hi 👋 I’m <span className="font-semibold text-white">Aarti Ghorpade</span>,
                            Software Developer with 2+ years of experience creating responsive, scalable, and user-friendly web applications, with additional knowledge in UI/UX design and mobile app development.
                        </p>

                        <p className="text-gray-400 leading-relaxed text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px] 4xl:text-[22px]">
                            I enjoy transforming ideas into engaging digital experiences while ensuring
                            performance, accessibility, and modern design principles.
                        </p>


                        <div className="flex flex-wrap gap-5 pt-5">
                            {socialData.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 transition-colors">
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-1"></div>

                    <div className="lg:col-span-4 relative hidden lg:block">
                        <div className="overflow-hidden">
                            <Image
                                src={heroImg}
                                alt="Aarti Ghorpade"
                                fill
                                className="object-cover w-full h-full rounded-[30%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
