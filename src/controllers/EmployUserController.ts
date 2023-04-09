import { Request, Response } from "express";
import { UserType } from "../interfaces";
import { EmployUserService } from "../services/EmployUserService";

export class EmployUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const someUserId: number = Number(request.params.id);

        const employUserService = new EmployUserService();
        const result: UserType = await employUserService.execute(someUserId);

        return response.status(200).json(result);
    };
};