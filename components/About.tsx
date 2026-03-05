"use client";
import { motion } from "framer-motion";

export const About = () => (
    <section className="py-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-24">

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative shrink-0 cursor-pointer"
        >
            <div className="absolute -inset-4 bg-indigo-600/20 rounded-full blur-3xl opacity-0 hover:opacity-100 transition duration-1000" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
                <img
                    src="/Me.jpg"
                    alt="Maaz"
                    className="
            w-full h-full object-cover rounded-full
            grayscale
            hover:grayscale-0
            hover:scale-105
            transition-all duration-700 ease-out
          "
                />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1"
        >
            <h2 className="text-indigo-500 font-mono text-sm mb-4 tracking-widest uppercase italic">
                01 // Origin
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                Crafting Web <br />
                <span className="text-indigo-600 italic">Universes.</span>
            </h3>

            <p className="text-gray-400 text-xl leading-relaxed font-light">
                I am Maaz Hashmi, a visionary Full-Stack Software Engineer dedicated to
                sculpting high-performance digital universes. Specializing in the MERN
                stack, I bridge the gap between complex backend architecture and immersive
                frontend experiences using{" "}
                <span className="text-white underline decoration-indigo-500">
                    Next.js
                </span>{" "}
                and <span className="text-white">Three.js</span>.
            </p>
        </motion.div>

    </section>
);
