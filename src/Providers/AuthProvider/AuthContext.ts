import { createContext } from 'react'
import { useCreateAuthContext } from './useCreateAuthContext'

type TAuthContext = ReturnType<typeof useCreateAuthContext>

export const AuthContext = createContext<TAuthContext>({} as TAuthContext)