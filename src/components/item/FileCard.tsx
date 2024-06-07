import ButtonDelete from "../button/ButtonDelete";
import ButtonDownload from "../button/ButtonDownload";
import DateFormat from "../utils/DateFormat";


interface CardProps {
    id: number;
    nameFile: string;
    createdAt: string;
    idPost: number;
    key: number
}

const FileCard: React.FC<CardProps> = ({id, idPost, nameFile, createdAt, key}) => {
  return (
    <div key={key} className="flex flex-col  h-42 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <div className="py-8">
    <h3 className="text-lg font-bold text-center text-gray-800 hover:underline underline-offset-1 dark:text-white">
      {nameFile}
    </h3>

    <div className="mt-3  flex  justify-center items-center gap-x-7 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
        <ButtonDownload fileId={id} nameFile={nameFile} />
    
    </div>
  </div>
  <div className="bg-gray-100 flex justify-between items-center px-3 text-center border-t rounded-b-xl  py-1 dark:bg-neutral-800 dark:border-neutral-700">
  <DateFormat item={createdAt} /> 
     <ButtonDelete id={idPost} fileId={id} />
  </div>
</div>
  )
}

export default FileCard;  