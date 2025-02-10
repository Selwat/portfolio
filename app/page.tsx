import About from "./components/About"
import { Title } from "./components/Header/title"
import ModelView from "./components/ModelView"
import Projects from "./components/ProjectsList"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative w-full h-[100vh]">
        {/* Model 3D - pod spodem */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ModelView />
        </div>

        {/* Napisy - na wierzchu, ale nie blokują interakcji */}
        <div className="absolute top-0 left-0 z-10 text-white max-md:flex max-md:justify-center max-md:items-center max-md:w-full">
          <Title />
        </div>
      </div>
      <div className="scroll-section w-full min-h-screen xl:h-screen">
        <About />
      </div>
      <div className="scroll-section w-full min-h-screen">
        <Projects />
      </div>
    </div>
  )
}
