import "reflect-metadata";
import express from "express";
import { createConnection } from 'typeorm';

createConnection();

const app = express();
app.listen(3333, () => console.log("server running on port 3333"));