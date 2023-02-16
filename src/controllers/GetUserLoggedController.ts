import { Request, Response } from "express";
import { customError } from "../errors/customError";
import { UserType } from "../interfaces";
import { GetUserLoggedService } from "../services/GetUserLoggedService";

export class GetUserLoggedController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id: string = request.decodedToken;

        const getUserLoggedService = new GetUserLoggedService();
        const result: UserType = await getUserLoggedService.execute(id);

        if (!result) {
            throw new customError(404, "User not found.");
        }

        return response.status(200).json(result);
    };
};