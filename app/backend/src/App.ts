import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import errorMiddleware from "./middlewares/Middleware.error";
import route from "./routes/export.routes";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req: Request, res: Response) => res.json({ ok: true }));

    this.app.use('/login', route.login);
    this.app.use('/register', route.register);
    this.app.use('/transactions', route.transactions);
    this.app.use('/user', route.users);
    this.app.use(errorMiddleware);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
