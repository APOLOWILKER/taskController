import * as express from 'express';
import {
  validateTitleTask,
  validateContentTask,
  validateStatus } from '../middlewares/validateTask';
import TaskController from '../controller/ControllerTask';

const taskRouter = express.Router();
const taskController = new TaskController();

// ==== ROUTE TASKS ===

taskRouter.delete(
  '/:id',
  taskController.deleteTask,
);

taskRouter.patch(
  '/:id',
  taskController.updateTask,
);

taskRouter.post(
  '/',
  validateStatus,
  validateContentTask,
  validateTitleTask,
  taskController.creatTask,
);

taskRouter.get(
  '/',
  taskController.getAll,
);

export default taskRouter;
