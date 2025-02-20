import About from "./components/About"
import Header from "./components/Header"
import Projects from "./components/ProjectsList"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="scroll-section w-full min-h-screen xl:h-screen">
        <About />
      </div>
      <div className="scroll-section w-full min-h-screen">
        <Projects />
      </div>
    </div>
  )
}
