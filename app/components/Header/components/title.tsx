"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Zmienna z docelowym tekstem
const targetText = "MIKOŁAJ_SELWAT"

export const Title = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timeout

    // Zatrzymanie animacji po wpisaniu całego tekstu
    if (currentIndex >= targetText.length) {
      setIsAnimating(false)
      return
    }

    const randomChar = () =>
      String.fromCharCode(33 + Math.floor(Math.random() * 94))

    const glitchEffect = () => {
      setDisplayText(
        (prev) =>
          prev.slice(0, currentIndex) +
          randomChar() +
          prev.slice(currentIndex + 1)
      )
    }

    // Efekt glitchowania
    interval = setInterval(glitchEffect, 50)

    timeout = setTimeout(() => {
      clearInterval(interval)
      setDisplayText(
        (prev) =>
          prev.slice(0, currentIndex) +
          targetText[currentIndex] +
          prev.slice(currentIndex + 1)
      )
      setCurrentIndex((prev) => prev + 1)
    }, 300)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [currentIndex])

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full h-full md:items-start md:justify-start md:pl-20 md:pt-20">
      <h3
        className={`w-full h-full text-[38px] font-bold text-white text-center max-md:text-[42px] transition-opacity duration-100 ${
          isAnimating ? "opacity-100" : "animate-fade-in"
        }`}
      >
        {displayText}
      </h3>
      <motion.div
        className="flex w-full h-full justify-center md:justify-start items-center cursor-pointer pointer-events"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <motion.button
          onClick={scrollToSection}
          className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg border-2 border-gray-300
                   hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>Scroll Down</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            ⬇️
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  )
}
