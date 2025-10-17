import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import furnitureImg from '../../../../public/images/furniture-webdesign.png'
import cosmeticsimg from '../../../../public/images/cosmetics-webdesign.png'
import foodlyimg from '../../../../public/images/foodly-appdesign.png'
import Link from 'next/link';


export default function Design() {
    const projects = [
        {
            img: cosmeticsimg,
            title: "BareGlow Cosmetics Web Design",
            desc: "A website designed to showcase skincare and beauty products with a modern look.",
            link: "https://www.behance.net/gallery/222628291/BareGlow-Cosmetics-Website",
            externalLink: true

        },
        {
            img: furnitureImg,
            title: "FurniSense Furniture Shop Web Design",
            desc: "A website designed to showcase stylish and functional furniture with a modern touch.",
            link: "https://www.behance.net/gallery/221147847/FurniSense-furniture-shop",
            externalLink: true
        },
        {
            img: foodlyimg,
            title: "Foodly Food Delivery App Design",
            desc: "A food delivery app design for a smooth and user-friendly ordering experience.",
            link: "https://www.behance.net/gallery/221613181/Foodly-food-delhivery-app",
            externalLink: true
        }
    ];

    return (
        <section>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden hover:bg-zinc-750 transition-colors group p-6 border border-gray-500">
                            {/* Project Image */}
                            <div className="h-[300px] md:h-[250px]">
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