import React, { useContext, useState, useEffect } from 'react';


const ThemeContext = React.createContext()


export function AuthProvider({ children }){
    [darkTheme, setDarkTheme] = useState(true)
    

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}