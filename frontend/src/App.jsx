import { useState } from "react"
import UploadForm from "./components/UploadForm"
import ResultPanel from "./components/ResultPanel"
import "./App.css"

function App() {

  const [resultado, setResultado] = useState(null)
  const [historico, setHistorico] = useState([])

  function handleNovoResultado(data) {
    setResultado(data)

    const placa = data?.dados?.[0]?.placa || "Nao detectada"
    const confianca = data?.dados?.[0]?.confianca

    setHistorico((prev) => [
      {
        id: Date.now(),
        placa,
        confianca,
        dataHora: new Date().toLocaleString("pt-BR"),
      },
      ...prev,
    ].slice(0, 10))
  }

  return (
    <div className="app">

      <header className="header">
        <h1>Dashboard de Reconhecimento de Placas</h1>
      </header>

      <div className="dashboard">

        <div className="card">
          <UploadForm setResultado={handleNovoResultado} />
        </div>

        <div className="card">
          <ResultPanel resultado={resultado} historico={historico} />
        </div>

      </div>

    </div>
  )
}

export default App