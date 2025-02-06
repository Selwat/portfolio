"use client"

import { motion } from "framer-motion"

const Description = () => {
  return (
    <motion.div
      className="w-full xl:w-1/3 h-auto p-4 md:p-6 text-white flex flex-col justify-center"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-xl md:text-2xl font-bold">
        Hi there 👋, I’m Mikołaj
      </h1>
      <p className="mt-2 text-sm md:text-base">
        I am a passionate Computer Science student with a keen interest in
        programming, particularly in frontend development. I enjoy creating
        user-friendly, responsive, and dynamic web applications that deliver a
        seamless experience. My goal is to continually grow as a developer by
        learning new technologies and improving my skills.
      </p>
      <h2 className="mt-4 text-lg md:text-xl font-semibold">
        🚀 Skills & Interests:
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-base">
        <li>
          <strong>Frontend Development:</strong> HTML, CSS, JavaScript, React,
          Next.js
        </li>
        <li>
          <strong>Currently Learning:</strong> React ⚛️, TypeScript 📘, Next.js,
          Tailwind CSS
        </li>
        <li>
          <strong>Tools & Libraries:</strong> Git, GitHub, Tailwind CSS
        </li>
        <li>
          <strong>Interest Areas:</strong> UI/UX design, web performance
          optimization, and accessibility
        </li>
      </ul>
    </motion.div>
  )
}

export default Description
