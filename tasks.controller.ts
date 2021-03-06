import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

import { Task } from './task.entity';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService){


  }
       /* @Get()
        getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{
            if(Object.keys(filterDto).length){

                return this.tasksService.getTasksWithFilters(filterDto);
            }else{

                return this.tasksService.getAllTasks();
            }
        
        }*/


        @Get('/:id') 
        getTaskId(@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.tasksService.getTaskById(id)     
        }

        @Post()
        @UsePipes(ValidationPipe)
            CreateTask(@Body() createTaskDto: CreateTaskDto ):Promise<Task> {
            return this.tasksService.createTask(createTaskDto);
            }

           /* @Delete('/:id')
            deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
            }    
            @Patch('/:id/status')
            updateTaskStatus(
            @Param('id') id: string,
            @Param('status', TaskStatusValidationPipe) status: TaskStatus,
            ): Task{
        return this.tasksService.updateTaskStatus(id, status);
            }*/

        }

