import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import swaggerMiddleware from "./middlewears/swagger-middleware.js";
import todoAppRouter from "./routes/todoAppRouter.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
  origin: "*",
  methods: "GET,POST,DELETE,PUT",
};

app.use(cors(corsOptions));

app.use("/api", todoAppRouter);
app.use("/public", express.static("public"));
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 4000);
