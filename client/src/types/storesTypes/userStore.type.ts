import type { User } from "../user.type"


export type userStoreType = {
    user: User | null
    isAuth: boolean
    isAdmin: boolean
    setUser: (user: User | null) => void
    setAuth: (isAuth: boolean) => void
    setAdmin: (isAdmin: boolean) => void
    logout: () => void

}