import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import loginRouter, { matchesRouter, teamsRouter } from './routers';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.initializeErrorHandling();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
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

  private routes(): void {
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamsRouter);
    this.app.use('/matches', matchesRouter);
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
