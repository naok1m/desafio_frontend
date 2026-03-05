import { useState } from "react"
import UploadForm from "./components/UploadForm"
import ResultPanel from "./components/ResultPanel"

function App() {

  const [resultado, setResultado] = useState(null)

  return (
    <div>

      <h1>Dashboard de Reconhecimento de Placas</h1>

      <UploadForm setResultado={setResultado} />

      <ResultPanel resultado={resultado} />

    </div>
  )
}

export default App