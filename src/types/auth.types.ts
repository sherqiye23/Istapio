export interface AuthResponse {
    accessToken: string | null,
    refreshToken: string | null,
    accessTokenExpiresAt: string,
    userId: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    roles: string[] | null
}
