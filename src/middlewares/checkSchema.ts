import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { SchemaType } from "../interfaces";

export function checkSchema(schema: ZodTypeAny) {

    return function (request: Request, response: Response, next: NextFunction) {
        const currentPayload: SchemaType = request.body;
        const payloadValidated = schema.parse(currentPayload);

        request.body = payloadValidated;

        return next();
    };

}