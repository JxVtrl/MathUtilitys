import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [pageSelected, setPageSelected] = useState(undefined)

    const [pages, setPages] = useState([
        'Bhaskara',
        'Regra de Três',
        'Calculadora',
        'Conversor de Moedas',
    ])
    
    const context = {

        pages, 
        setPages,

        pageSelected,
        setPageSelected,

    }


    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}