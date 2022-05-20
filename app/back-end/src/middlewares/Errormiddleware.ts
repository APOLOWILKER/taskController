import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export default (err: ErrorRequestHandler, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);

  return res.status(500).json({ message: 'internal server error' });
};
