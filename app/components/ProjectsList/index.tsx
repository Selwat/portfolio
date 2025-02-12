'use client'
import { motion } from "framer-motion"
import React from "react"

interface Project {
  title: string
  description: string
  status?: string
}

const projects: Project[] = [
  {
    title: "Company Headquarters Intranet",
    description:
      "An advanced internal platform for employees, providing access to documents, news, and daily operational information."
  },
  {
    title: "Contractor Settlement System",
    description:
      "A dedicated system for recording contractor orders, automatic settlement, and financial report generation."
  },
  {
    title: "Package and Pricing Management Panel",
    description: "An administrative module enabling comprehensive management of product packages, their pricing, and availability within the system."
  },
  {
    title: "Branch Intranet",
    description:
      "An extended version of the corporate intranet, providing operational support for over 2,500 branches with features tailored for the sales network."
  },
  {
    title: "Label and Product Rating Management Panel",
    description:
      "A system enabling efficient management of product labels and their ratings, supporting quality analysis and product marketing."
  },
  {
    title: "Stable Management Application",
    description:
      "A comprehensive tool for managing horseback riding reservations, communication with instructors, and publishing updates for customers.",
    status: "In Progress"
  }
]

const Projects: React.FC = () => {
  return (
    <motion.div
      className="scroll-section w-full h-auto bg-emerald-950 text-white py-16 px-8 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
          >
            {project.status && (
              <span className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded-tr-2xl rounded-bl-md">
                {project.status}
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects