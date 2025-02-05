import Description from "./description"
import TechLogos from "./skillTiles"

const About = () => {
  return (
    <div className="w-full h-auto lg:h-[100vh] p-10 flex flex-col lg:flex-row gap-6 items-center justify-between">
      <Description />
      <div className="w-1/3 h-full"></div>
      <TechLogos />
    </div>
  )
}

export default About
