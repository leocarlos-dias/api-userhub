import { Request, Response } from "express";
import { customError } from "../errors/customError";
import { DismissUserSerivce } from "../services/DismissUserSerivce";

export class DismissUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const someUserId: number = Number(request.params.id);

        const dismissUserSerivce = new DismissUserSerivce();
        const result: number = await dismissUserSerivce.execute(someUserId);

        if (!result) {
            throw new customError(404, "User not found.");
        };

        return response.status(204).json();
    };
};