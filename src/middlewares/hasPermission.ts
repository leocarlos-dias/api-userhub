import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { customError } from "../errors/customError";

export function hasPermission(request: Request, response: Response, next: NextFunction) {
    const permission: boolean = request.hasPermission;

    if (!permission) {
        throw new customError(403, "Insufficient Permission");
    };

    return next();
}