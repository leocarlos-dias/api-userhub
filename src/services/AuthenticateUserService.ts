import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { customError } from "../errors/customError";
import { AuthenticateUserType, UserType } from "../interfaces";


export class AuthenticateUserService {
    async execute(user: AuthenticateUserType): Promise<string> {
        const { email } = user;

        const userFound: QueryResult<UserType> = await client.query(format(`
            SELECT * FROM 
                users
            WHERE 
                email = %L;`,
            email
        ));

        const userResult: UserType = userFound.rows[0];

        if (!userResult || !userResult.active) {
            throw new customError(401, "Wrong email/password");
        };

        const correctPassword: boolean = await compare(user.password, userResult.password)
        if (!correctPassword) {
            throw new customError(401, "Wrong email/password");
        }

        const token = sign({ adm: userResult.admin }, String(process.env.SECRET_KEY), {
            subject: String(userResult.id),
            expiresIn: "15m"
        });


        return token;
    };
};