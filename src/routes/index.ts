import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DismissUserController } from "../controllers/DismissUserController";
import { EmployUserController } from "../controllers/EmployUserController";
import { GetAllUserController } from "../controllers/GetAllUserController";
import { GetUserLoggedController } from "../controllers/GetUserLoggedController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { authentication } from "../middlewares/authentication";
import { checkSchema } from "../middlewares/checkSchema";
import { hasPermission } from "../middlewares/hasPermission";
import { ownUser } from "../middlewares/ownUser";
import { userExists } from "../middlewares/userExists";
import { authenticateUserSchema, createUserSchema, updateUserSchema } from "../schemas";

export const routes = Router();

routes.post("/users", checkSchema(createUserSchema), new CreateUserController().handle);
routes.post("/login", checkSchema(authenticateUserSchema), new AuthenticateUserController().handle);
routes.get("/users", authentication, hasPermission, new GetAllUserController().handle);
routes.get("/users/profile", authentication, new GetUserLoggedController().handle);
routes.patch("/users/:id", checkSchema(updateUserSchema), authentication, ownUser, userExists, new UpdateUserController().handle);
routes.delete("/users/:id", authentication, ownUser, userExists, new DismissUserController().handle);
routes.put("/users/:id/recover", authentication, hasPermission, userExists, new EmployUserController().handle);
