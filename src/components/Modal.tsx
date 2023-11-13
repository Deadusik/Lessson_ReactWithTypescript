interface IModalProps {
    title: string
    children: React.ReactNode
    onClose: () => void
}

export const Modal = ({ title, children, onClose }: IModalProps) => {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0">
            <div className="bg-black/50 w-full h-full"
                onClick={onClose} />
            <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-center mb-2">{title}</h1>
                {children}
            </div>
        </div>
    )
}