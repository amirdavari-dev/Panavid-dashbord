import { createContext, useState } from "react"

const DashbordAPI = createContext()
const ContextAPI = ({ children }) => {
    // menu hamburger data
    const [menuCollect, setMenuCollect] = useState(false)

    
    return (
        <DashbordAPI.Provider value={{ menuCollect, setMenuCollect}}>
            {children}
        </DashbordAPI.Provider>
    )
}
export { DashbordAPI, ContextAPI }