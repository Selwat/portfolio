"use client"
import { motion } from "framer-motion"
import Description from "./description"
import TechLogos from "./skillTiles"
import ModelManView from "../ModelManView"

const About = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollDown = () => {
    const sections = Array.from(document.querySelectorAll(".scroll-section"))
    const currentScroll = window.scrollY
    let nextSection = null

    for (const section of sections) {
      if (
        section instanceof HTMLElement &&
        section.offsetTop > currentScroll + 10
      ) {
        nextSection = section
        break
      }
    }

    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="w-full h-full p-4 md:p-10 flex flex-col items-center xl:justify-between">
      <motion.div
        className="flex cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <motion.button
          onClick={scrollUp}
          className="bg-white text-gray-900 font-semibold px-4 md:px-6 py-2 rounded-full shadow-lg border-2 border-gray-300 hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>Scroll Up</span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            ⬆️
          </motion.span>
        </motion.button>
      </motion.div>
      <div className="w-full h-1/3 md:h-full xl:px-10 flex flex-col xl:flex-row gap-6 items-center justify-between">
        <Description />
        <div className="w-full h-[600px] xl:w-1/3 xl:h-1/2 min-h-[500px] ">
          <ModelManView />
        </div>
        <TechLogos />
      </div>
      <motion.div
        className="hidden xl:flex cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <motion.button
          onClick={scrollDown}
          className="bg-white text-gray-900 font-semibold px-4 md:px-6 py-2 rounded-full shadow-lg border-2 border-gray-300 hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
        >
          <span>Scroll Down</span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            ⬇️
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About
