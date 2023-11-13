import { createContext, useState } from "react"

interface IModalContext {
    isShow: boolean
    open: () => void
    close: () => void
}

export const ModalContext = createContext<IModalContext>({
    isShow: false,
    open: () => { },
    close: () => { }
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
    const [isShow, setIsShow] = useState(false)
    const open = () => setIsShow(true)
    const close = () => setIsShow(false)

    return (
        <ModalContext.Provider value={{ isShow, open, close }}>
            {children}
        </ModalContext.Provider>
    )
}