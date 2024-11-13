import { AuthProvider } from "./AuthContext"
import { UserProvider } from "./UserProvider"

interface iProvider {
  children: React.ReactNode
}

export const Providers = ({ children }: iProvider) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}
