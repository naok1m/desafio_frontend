import { useState } from "react";

function UploadForm() {
    const [, setFile] = useState();
    const [preview, setPreview] = useState();
    
    function handleChange(e){
        const selectedFile = e.target.files[0];    
        if (!selectedFile) return;

        setFile(selectedFile);

        const imgURL = URL.createObjectURL(selectedFile);
        setPreview(imgURL)
    }
    return(
        <div>
            <input type="file" accept="image/*" onChange={handleChange}/>
            {preview && (
            <img src={preview} 
            alt="preview"
            style={{ width: "400px" }}/>
            )}
        </div>

    )


    
}


export default UploadForm;