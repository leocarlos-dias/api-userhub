import { Request, Response } from "express";
import { UserType } from "../interfaces";
import { GetUserLoggedService } from "../services/GetUserLoggedService";

export class GetUserLoggedController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id: string = request.decodedToken;

        const getUserLoggedService = new GetUserLoggedService();
        const result: UserType = await getUserLoggedService.execute(id);

        return response.status(200).json(result);
    };
};