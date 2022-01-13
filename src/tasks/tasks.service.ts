import { Injectable } from '@nestjs/common';
import {Task} from './task.model';

@Injectable()
export class TasksService {
  private tasks : Task[] = [];

  getAllTasks(){
    return this.tasks;
  }

  createTask(title: string, description:string): Task {
    const task : Task ={
    id: '',
    title,
    description,
    status: TasksStatus.OPEN,
  };
}
}
