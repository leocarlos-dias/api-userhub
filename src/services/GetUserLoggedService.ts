import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { customError } from "../errors/customError";
import { UserType } from "../interfaces";


export class GetUserLoggedService {
    async execute(id: string): Promise<UserType> {

        const user: QueryResult<UserType> = await client.query(format(`
            SELECT
                id, name, email, admin, active
            FROM
                users
            WHERE
                id = %L;`,
            id
        ));

        if (!user.rows[0]) {
            throw new customError(404, "User not found.");
        }

        return user.rows[0];
    };
};