import { Request, Response } from "express";
import { customError } from "../errors/customError";
import { UserType } from "../interfaces";
import { EmployUserService } from "../services/EmployUserService";

export class EmployUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const someUserId: number = Number(request.params.id);

        const employUserService = new EmployUserService();
        const result: UserType = await employUserService.execute(someUserId);

        if (!result) {
            throw new customError(400, "User already active");
        };

        return response.status(200).json(result);
    };
};