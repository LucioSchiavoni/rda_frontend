

const ErrorMessage = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="p-4 rounded-md border shadow-xl bg-gray-400">
        {children}
    </div>
  )
}

export default ErrorMessage