export interface AuthResponse extends UserType {
    accessToken: string | null,
    refreshToken: string | null,
    accessTokenExpiresAt: string,
}

export interface ForgotPasswordRequest {
    email: string
}

export interface UserType {
    userId: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    roles: string[] | null
}