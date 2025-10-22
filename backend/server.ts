import express, {Application, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";

dotenv.config();

class Server {
    public app: Application;
    private port: number;

    constructor(port: number = 3000) {
        this.app = express();
        this.port = Number(process.env.PORT) || port;

        this.initMiddleware();
        this.initRoutes();
    }

    private initMiddleware(): void {
        this.app.use(express.json());
    }

    private initRoutes(): void {
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Simaak was here!")
        })
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log("SERVER IS RUNNING FINE :)");
        })
    }
}

const server = new Server();
server.listen();



