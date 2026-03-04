import { useState } from "react";
import UploadForm from "./components/UploadForm";


function App() {
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Leitor de Placas</h1>
            <UploadForm />
            
        </div>
    );
}
export default App;