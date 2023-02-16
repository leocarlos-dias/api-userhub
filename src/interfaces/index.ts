import { JwtPayload } from "jsonwebtoken";
import { z, ZodTypeAny } from "zod";
import { authenticateUserSchema, createUserSchema, updateUserSchema, userSchema } from "../schemas";

export type UserType = z.infer<typeof userSchema>;
export type CreateUserType = z.infer<typeof createUserSchema>;
export type AuthenticateUserType = z.infer<typeof authenticateUserSchema>;
export type UpdateUserType = z.infer<typeof updateUserSchema>;

export type SchemaType = z.infer<ZodTypeAny>;

export interface IDecodedToken extends JwtPayload {
    adm: boolean,
}