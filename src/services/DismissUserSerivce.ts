import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { UserType } from "../interfaces";

export class DismissUserSerivce {
    async execute(id: number): Promise<number> {

        const deletedUser: QueryResult<UserType> = await client.query(format(`
            UPDATE 
                users
            SET active = false
            WHERE
                id = %L`,
            id
        ));

        return deletedUser.rowCount;
    };
};