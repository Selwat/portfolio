'use client'
import { motion } from "framer-motion"
import React from "react"

interface Project {
  title: string
  description: string
}

const projects: Project[] = [
  {
    title: "Intranet dla centrali firmy",
    description:
      "Platforma dla pracowników zawierająca dokumenty, aktualności i dzienne informacje.",
  },
  {
    title: "System rozliczania kontrahentów",
    description:
      "Wewnętrzny system rejestrujący zamówienia od kontrahentów, automatyczne sumowanie i rozliczanie.",
  },
  {
    title: "Panel zarządzania pakami i cenami",
    description: "System do zarządzania pakami, ich cenami oraz dostępnością.",
  },
  {
    title: "Intranet dla oddziałów",
    description:
      "Rozszerzona wersja intranetu dla ponad 2500 oddziałów z funkcjami dla sklepów.",
  },
  {
    title: "Panel zarządzania etykietami i oceną produktów",
    description:
      "Platforma umożliwiająca zarządzanie etykietami produktów oraz ich oceną.",
  },
  {
    title: "Aplikacja do zarządzania stajnią",
    description:
      "System do zarządzania rezerwacjami jazd, aktualnościami i akceptacją przez instruktorów.",
  },
]

const Projects: React.FC = () => {
  return (
    <motion.div
      className="scroll-section w-full h-auto bg-emerald-950 text-white py-16 px-8 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projekty</h2>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
