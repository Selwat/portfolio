'use client'
import { motion } from "framer-motion"

const technologies = [
  { name: "Next.js", src: "/nextjs-icon.svg" },
  { name: "Tailwind", src: "/tailwind-icon.png" },
  { name: "GraphQL", src: "/graphql-icon.png" },
  { name: "React", src: "/react-icon.png" },
  { name: "Firebase", src: "/firebase-icon.png" },
  { name: "TypeScript", src: "/typescript-icon.png" },
]

const TechLogos = () => {
  return (
    <motion.div
    className="w-full xl:w-[400px] flex flex-wrap justify-center gap-6 p-4 md:p-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-900 shadow-lg cursor-pointer flex items-center justify-center rounded-2xl"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          whileHover={{
            rotateY: 180,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl"
            style={{ transform: "rotateY(0deg)", backfaceVisibility: "hidden" }}
          >
            <img src={tech.src} alt={tech.name} className="p-2 md:p-4" />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white text-xs md:text-lg font-semibold rounded-2xl"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            {tech.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TechLogos
