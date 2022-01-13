import { TestModule } from './test/app.module';
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
@Module({

  imports: [TasksModule, TestModule]
})
export class AppModule {}
