export class UserSession {
    userId?: number;
    username: string;
    userAgent: string;
    origin: string;
    country: string;
    loginDtm: string;
    logoutDtm: string;
    success: boolean;
    cause: string;
}