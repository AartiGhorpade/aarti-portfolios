"use client";

import { useState } from "react";
import Other from "../Other/page";
import Development from "../Development/page";
import Design from "../Design/page";
import Experience from "../Experience/page";

export default function Details() {
    const data = [
        "Other Details",
        "Experience",
        "Development",
        "Design",
    ]

    const [active, setActive] = useState('Other Details')
    return (
        <section className="relative  text-white pb-20 container">
            <div className={` bg-gradient-to-tr from-[#1B0533] to-[#041E47] backdrop-blur-md rounded-bl-[60px] rounded-tr-[60px] px-6 py-20 sm:p-12 md:p-20`}>
                <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory  mb-14">
                    {data.map((elem, ind) => (
                        <div
                            key={ind}
                            onClick={() => setActive(elem)}
                            className={`cursor-pointer flex-shrink-0 snap-start px-5 py-1 text-base sm:text-lg font-medium rounded-full shadow-md transition-all duration-300 whitespace-nowrap
                                      ${active === elem ? "bg-gradient-to-r from-purple-500 to-indigo-400 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`}>
                            {elem}
                        </div>
                    ))}
                </div>


                {
                    active == "Other Details" && <Other />
                }
                {
                    active == "Development" && <Development />
                }
                {
                    active == "Design" && <Design />
                }
                {
                    active == "Experience" && <Experience />
                }
            </div>

        </section>
    );
}
