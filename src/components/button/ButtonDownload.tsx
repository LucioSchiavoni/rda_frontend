import { downloadFileRequest } from "../../api/notas";

interface ButtonDownloadProps {
    fileId: number;
}

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ fileId }) => {

    const handleDownload = async () => {
        try {
            const res = await downloadFileRequest(fileId);
            const url = window.URL.createObjectURL(new Blob([res?.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'archivo.txt');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };

    return (
        <div>
            <button className="border hover:scale-125 transition-all px-3 py-1 rounded-md shadow-xl" onClick={handleDownload}>Descargar</button>
        </div>
    );
}

export default ButtonDownload;
