interface ErrorCardProps{
    message : string;
    onRetry: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({message, onRetry}) => {
    return(
        <div className="flex flex-col items-center justify-center p-5  text-white rounded-lg my-10">
      <p className="mb-4 font-bold">{message}</p>
      <button 
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
    )
}
export default ErrorCard