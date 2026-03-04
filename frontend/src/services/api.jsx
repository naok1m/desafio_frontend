export async function recognizePlate(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    "http://localhost:8000/api/recognize-plate",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  return response.json();
}