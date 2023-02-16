import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { customError } from "../errors/customError";

export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {

    if (error instanceof customError) {
        return response.status(error.statusCode).json({ message: error.message });
    };

    if (error instanceof ZodError) {
        return response.status(400).json(error.flatten().fieldErrors);
    };

    if (error.message.includes("users_email_key")) {
        return response.status(409).json({ message: "E-mail already registered" });
    };

    if (error.message === ("invalid token")) {
        return response.status(401).json({ message: error.message });
    };

    return response.status(500).json({ message: "Internal server error" });
};