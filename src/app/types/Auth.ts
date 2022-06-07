export type TypeLogin = {
    email: string, 
    password: string
}
export type TypeLogResponse = {
    token: string,
    user: {
        email: string,
    }
}