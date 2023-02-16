declare namespace Express {
    export interface Request {
        hasPermission: boolean;
        decodedToken: string;
    }
}