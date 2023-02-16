import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { customError } from "../errors/customError";

export function ownUser(request: Request, response: Response, next: NextFunction) {
    const permission: boolean = request.hasPermission;
    const userId: number = Number(request.decodedToken);
    const someUserId: number = Number(request.params.id);

    if (!permission && userId !== someUserId) {
        throw new customError(403, "Insufficient Permission");
    };

    return next();
}