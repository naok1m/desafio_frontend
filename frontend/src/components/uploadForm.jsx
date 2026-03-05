import { useState } from "react"
import { recognizePlate } from "../services/api"

function UploadForm({ setResultado }) {

  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {

    const selected = e.target.files[0]

    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
    }
  }

  async function handleSubmit() {

    if (!file) {
      alert("Selecione uma imagem")
      return
    }

    try {

      setLoading(true)

      const data = await recognizePlate(file)

      setResultado(data)

    } catch (error) {

      console.log(error)
      alert("Erro ao enviar imagem")

    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      <input type="file" onChange={handleChange} />

      {preview && (
        <div>
          <h3>Preview</h3>
          <img src={preview} width="300" />
        </div>
      )}

      <button onClick={handleSubmit} disabled={loading}>
        Enviar imagem
      </button>

      {loading && <p>Loading...</p>}

    </div>
  )
}

export default UploadForm