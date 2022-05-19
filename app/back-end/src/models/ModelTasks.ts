import { Pool, RowDataPacket } from 'mysql2/promise';
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
}
