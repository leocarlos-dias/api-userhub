import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
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

        return user.rows[0];
    };
};