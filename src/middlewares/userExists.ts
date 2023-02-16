import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { customError } from "../errors/customError";
import { UserType } from "../interfaces";


export async function userExists(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const id = request.params.id

    if (!id) {
        throw new customError(404, "User not found.");
    };

    const user: QueryResult<UserType> = await client.query(format(`
        SELECT
            id
        FROM
            users
        WHERE
            id = %L;`,
        id
    ));

    if (!user.rows[0]) {
        throw new customError(404, "User not found.");
    };

    return next();
};