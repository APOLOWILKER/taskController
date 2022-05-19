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
}
