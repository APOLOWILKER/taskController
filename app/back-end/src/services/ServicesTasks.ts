import ICreateTask from '../interfaces/CreateTask';
import connection from '../models/connection';
import ModelTasks from '../models/ModelTasks';
import ITasks from '../interfaces/TasksInterface';

export default class TaskService {
  public model: ModelTasks;

  constructor() {
    this.model = new ModelTasks(connection);
  }

  public async getAll(): Promise<ITasks[]> {
    const tasks = await this.model.getAll();
    return tasks;
  }

  public creatTask(titleTask: string, contentTask: string, statusTask: string)
    : Promise<ICreateTask> {
    return this.model.create(titleTask, contentTask, statusTask);
  }
}
