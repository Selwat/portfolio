import { Title } from "./components/Header/title"
import ModelView from "./components/ModelView"

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-emerald-950">
      {/* Model 3D - pod spodem */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ModelView />
      </div>

      {/* Napisy - na wierzchu, ale nie blokują interakcji */}
      <div className="absolute top-0 left-0 w-min h-min z-10 flex text-white">
        <Title />
        
      </div>
    </div>
  )
}
