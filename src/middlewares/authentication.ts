import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { customError } from "../errors/customError";
import { IDecodedToken } from "../interfaces";

export function authentication(request: Request, response: Response, next: NextFunction) {
    const receivedToken: string | undefined = request.headers.authorization;

    if (!receivedToken) {
        throw new customError(401, "Missing Bearer Token");
    }

    const [, token] = receivedToken.split(" ");

    const { adm, sub } = verify(token, String(process.env.SECRET_KEY)) as IDecodedToken;

    if (!sub) {
        throw new customError(403, "Invalid Token");
    };

    request.hasPermission = adm;
    request.decodedToken = sub;

    return next();
}