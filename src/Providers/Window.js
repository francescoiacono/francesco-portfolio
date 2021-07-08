import React, { createContext, useContext, useState } from 'react'

export const WindowContext = createContext({});

const WindowProvider = ({children}) => {

    const [data, setData] = useState({
        open: false,
    });

    const toggleOpen = () => {
        console.log(data);
        setData({
            ...data,
            open: !data.open,
        });
    }

    return (
        <WindowContext.Provider value={{...data, toggleOpen}}>
            {children}
        </WindowContext.Provider>
    )
}

export const useWindow = () => useContext(WindowContext);

export default WindowProvider