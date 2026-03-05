function ResultPanel({ resultado }) {

  if (!resultado) return null

  return (
    <div>

      <h2>Resultado</h2>

      <pre>
        {JSON.stringify(resultado, null, 2)}
      </pre>

    </div>
  )
}

export default ResultPanel