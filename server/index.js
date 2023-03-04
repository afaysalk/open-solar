import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import panelRoutes from "./routes/panel.js"
import generalRoutes from "./routes/general.js"
import analyticsRoutes from "./routes/analytics.js"
import systemRoutes from "./routes/system.js"

/* Config */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

/* Routes */
app.use("/general", generalRoutes);
app.use("/panel", panelRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/system", systemRoutes);

