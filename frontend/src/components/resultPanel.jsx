function ResultPanel({ resultado, historico }) {
  const placa = resultado?.dados?.[0]?.placa
  const confianca = resultado?.dados?.[0]?.confianca

  function exportarHistoricoCsv() {
    if (!historico.length) {
      return
    }

    const headers = ["data_hora", "placa", "confianca"]
    const rows = historico.map((item) => [
      item.dataHora,
      item.placa,
      typeof item.confianca === "number" ? item.confianca.toFixed(2) : "",
    ])

    const escapeCsv = (value) => {
      const text = String(value ?? "")
      const escaped = text.replaceAll('"', '""')
      return `"${escaped}"`
    }

    const csvContent = [headers, ...rows]
      .map((row) => row.map(escapeCsv).join(","))
      .join("\n")

    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `historico_placas_${new Date().toISOString().slice(0, 19).replaceAll(":", "-")}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div>

      <h2>Resultado</h2>

      {resultado ? (
        <>
          <p>
            <strong>Placa:</strong> {placa || "Não detectada"}
          </p>

          <p>
            <strong>Confiança:</strong> {typeof confianca === "number" ? confianca.toFixed(2) + "%" : "N/A"}
          </p>
        </>
      ) : (
        <p>Nenhuma placa analisada ainda.</p>
      )}

      <h3>Historico da Sessao</h3>

      <button onClick={exportarHistoricoCsv} disabled={!historico.length}>
        Baixar CSV da Sessao
      </button>

      {historico.length === 0 ? (
        <p>Nenhum resultado salvo ainda.</p>
      ) : (
        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Data/Hora</th>
                <th>Placa</th>
                <th>Confianca</th>
              </tr>
            </thead>
            <tbody>
              {historico.map((item) => (
                <tr key={item.id}>
                  <td>{item.dataHora}</td>
                  <td>{item.placa}</td>
                  <td>{typeof item.confianca === "number" ? item.confianca.toFixed(2) + "%" : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  )
}

export default ResultPanel