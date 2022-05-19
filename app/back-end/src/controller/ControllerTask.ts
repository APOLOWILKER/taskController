// controller

import { Request, Response, NextFunction } from 'express';
import TaskService from '../services/ServicesTasks';

export default class TaskController {
  taskService = new TaskService();

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.taskService.getAll();
      console.log(tasks);

      return res.status(200).json(tasks);
    } catch (error) {
      console.error();
      next(error);
    }
  };
}

// TRYBSMITH REFERENCE
