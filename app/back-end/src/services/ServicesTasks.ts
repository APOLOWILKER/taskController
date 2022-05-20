import IUpdateTasks from '../interfaces/updateTask';
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

  public async updateTask(
    { id, titleTask, contentTask, statusTask }: IUpdateTasks,
  ): Promise<ITasks | any> {
    await this.model.updateTask(
      { id, titleTask, contentTask, statusTask },
    );
    const findTask = await this.getAll();
    const idMatch = findTask.filter((task: ITasks) => id === task.id);

    console.log(idMatch);

    return idMatch;
  }
}
