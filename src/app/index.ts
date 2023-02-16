import "dotenv/config";
import express, { Application } from "express";
import "express-async-errors";
import { errorHandler } from "../middlewares/errorHandler";
import { routes } from "../routes";

export const app: Application = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);
