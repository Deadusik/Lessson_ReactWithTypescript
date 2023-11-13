interface IErrorProps {
    error: string
}

export const Error = ({ error }: IErrorProps) => {
    return (
        <p className='text-red-600 text-bold'>{error}</p>
    )
}