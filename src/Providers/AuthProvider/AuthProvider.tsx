import { AuthContext } from "./AuthContext"
import { useCreateAuthContext } from "./useCreateAuthContext"


interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const authContext = useCreateAuthContext()

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}