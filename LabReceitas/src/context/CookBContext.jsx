//Contexto para gerenciar o estado global das anotações
import { createContext, useContext} from 'react';
import useCookB from '../hooks/useCookB';


// CookBContext
export const CookBContext = createContext();

// CookBProvider
export const CookBProvider = ({children}) => {
  
    const store = useCookB()
    return (
        <CookBContext.Provider value={{...store}}>
            {children}
        </CookBContext.Provider>
    )
}

// useNoteContext
export const useCookBContext = () => useContext(CookBContext);