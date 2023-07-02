import { createContext, useContext } from 'react'
import { ContextType } from '../types/ContextType'

export const Context = createContext<ContextType | null>(null)

export const useContextIsNull = () => {
    const context = useContext(Context)

    if(!context) {
        throw new Error()
    }

    return context
}