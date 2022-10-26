// error handling tirado de https://wanago.io/2018/12/17/typescript-express-error-handling-validation/
import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/HttpException';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  _next: NextFunction,
) {
  const status = error.status || 500;
  const { message } = error;
  response
    .status(status)
    .send({
      message,
    });
}

export default errorMiddleware;
