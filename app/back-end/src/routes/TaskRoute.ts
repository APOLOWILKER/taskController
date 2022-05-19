import * as express from 'express';
import TaskController from '../controller/ControllerTask';

const taskRouter = express.Router();
const taskController = new TaskController();

// ==== ROUTE TASKS ===
taskRouter.get(
  '/',
  taskController.getAll,
);

export default taskRouter;
