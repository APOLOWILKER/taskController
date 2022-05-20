import { NextFunction, Request, Response } from 'express';

export function validateTitleTask(req: Request, res: Response, next: NextFunction) {
  const { titleTask } = req.body;

  if (!titleTask) {
    return res.status(400).json({ error: 'titleTask is required' });
  }

  if (typeof (titleTask) !== 'string') {
    return res.status(422).json({ error: 'titleTask must be a string' });
  }

  if (titleTask.length <= 2) {
    return res.status(422).json({ error: 'titleTask must be longer than 2 characters' });
  }

  next();
}

export function validateContentTask(req: Request, res: Response, next: NextFunction) {
  const { contentTask } = req.body;

  if (!contentTask) {
    return res.status(400).json({ error: 'contentTask is required' });
  }

  if (typeof (contentTask) !== 'string') {
    return res.status(422).json({ error: 'contentTask must be a string' });
  }

  if (contentTask.length < 3) {
    return res.status(422).json({ error: 'contentTask must be longer than 3 characters' });
  }

  next();
}

export function validateStatus(req: Request, res: Response, next: NextFunction) {
  const { statusTask } = req.body;

  if (!statusTask) {
    return res.status(400).json({ error: 'statusTask is required' });
  }

  if (typeof (statusTask) !== 'string') {
    return res.status(422).json({ error: 'statusTask must be a string' });
  }

  if (statusTask !== ('Pendente' || 'Em andamento' || 'Pronto')) {
    return res.status(422).json({ error:
        'statusTask must have the content of Pending or In Progress or Ready' });
  }

  next();
}
