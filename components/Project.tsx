"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [

    { id: 3, title: "Lead-Managment-System", description: "Full Stack CRM", tags: ["Express", "Chart.js"], link: "https://leads-management-system-next.vercel.app/" },
    { id: 3, title: "Accounts-Managment-System", description: "Full Stack CRM", tags: ["Express", "Chart.js"], link: "https://accounts-software-frontend.vercel.app/login" },
    { id: 3, title: "Data-Managment-System", description: "Full Stack CRM", tags: ["Express", "Chart.js"], link: "https://data-management-system-next.vercel.app/login" },
    { id: 3, title: "Assan Rishta Website", description: "Full Stack CRM", tags: ["Express", "Chart.js"], link: "https://data-management-system-next.vercel.app/login" },
    { id: 6, title: "Dib Education System", description: "Full Stack Project.", tags: ["Next.js", "Tailwind", "Cloudinary"], link: "https://dib.ac.pk/" },
    { id: 5, title: "Dawood Gee Astrologer", description: "Modern Website in Frontend + Backend", tags: ["Next.js", "Tailwind", "Cloudinary"], link: "https://dawoodgeedawood.com/" },
    { id: 2, title: "Hukam Express", description: " Website With Dashboard.", tags: ["Three.js", "Next.js"], link: "https://hukamexpress.com/" },
    { id: 4, title: "Ride To Mechanic", description: "E-Commerce Website With Dashboard.", tags: ["Next Js", "Chart.js"], link: "https://full-stack-project-sandy.vercel.app/" },
    { id: 1, title: "Gifted Wheels Driving School", description: "Driving Website build in Js", tags: ["React", "Node.js", "MongoDB"], link: "https://giftedwheelsds.com/" },

];

export const Projects = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto bg-[#020205]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
                <div>
                    <h2 className="text-indigo-500 font-mono text-xs mb-2 uppercase tracking-widest italic">
                        02 // Selected Works
                    </h2>
                    <h3 className="text-5xl font-bold text-white">Live Missions</h3>
                </div>
                <div className="text-gray-500 font-mono text-sm tracking-tighter italic">
                    Total Projects: {projects.length}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        key={project.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative block rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-md transition-all hover:border-indigo-500/40 hover:bg-white/[0.04] shadow-2xl"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-indigo-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                        <div className="relative p-12 h-full flex flex-col bg-[#020205]/80">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500">
                                    <span className="text-xl group-hover:scale-125 transition-transform">🛰️</span>
                                </div>
                                <div className="text-[10px] font-mono text-indigo-400 border border-indigo-400/30 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:bg-indigo-400 group-hover:text-black transition-all">
                                    View Live
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 font-light mb-10 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] py-1.5 px-4 rounded-full bg-white/5 border border-white/5 text-gray-500 font-mono group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};