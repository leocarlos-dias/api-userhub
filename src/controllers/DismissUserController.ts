import { Request, Response } from "express";
import { DismissUserSerivce } from "../services/DismissUserSerivce";

export class DismissUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const someUserId: number = Number(request.params.id);

        const dismissUserSerivce = new DismissUserSerivce();
        await dismissUserSerivce.execute(someUserId);

        return response.status(204).json();
    };
};