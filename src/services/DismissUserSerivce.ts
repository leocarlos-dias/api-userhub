import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { customError } from "../errors/customError";
import { UserType } from "../interfaces";

export class DismissUserSerivce {
    async execute(id: number): Promise<void> {

        const deletedUser: QueryResult<UserType> = await client.query(format(`
            UPDATE 
                users
            SET active = false
            WHERE
                id = %L`,
            id
        ));

        if (!deletedUser.rowCount) {
            throw new customError(404, "User not found.");
        };
    };
};