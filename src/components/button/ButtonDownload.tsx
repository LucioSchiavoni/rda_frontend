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
         <button onClick={handleDownload} className="flex items-center px-4 py-2 text-sm font-medium  transition-colors duration-200 sm:text-base sm:px-6  rounded-md dark:hover:bg-blue-800 bg-blue-950 text-white gap-x-3 hover:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <span className="text-white">Descargar</span>
    </button>
    );
}

export default ButtonDownload;
