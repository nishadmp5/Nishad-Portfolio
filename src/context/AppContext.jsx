import { createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [isFixed,setIsFixed] = useState(false);
    const [isLargeScreen,setIsLargeScreen] = useState(window.innerWidth >= 1024);

    const value = {
        isFixed,setIsFixed,
        isLargeScreen,setIsLargeScreen
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider