import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import ICreateTask from '../interfaces/CreateTask';
import ITasks from '../interfaces/TasksInterface';

export default class TaskModel {
  protected connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<ITasks[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM TaskController.Tasks');
    const [rows] = result;
    return rows as ITasks[];
  }

  public async create(titleTask: string, contentTask: string, statusTask: string)
    : Promise<ICreateTask> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO TaskController.Tasks (titleTask, contentTask, statusTask) VALUES (?, ?, ?)',
      [titleTask, contentTask, statusTask],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    const [select] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * from TaskController.Tasks where id=?',
      [insertId],
    );

    console.log(select);

    return select as unknown as ITasks;
  }
}
