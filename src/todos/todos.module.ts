/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { TodosController } from "./todos.controller";
import { TodosRepository } from "./todos.repository";

@Module({
    imports: [],
    providers: [TodosService, TodosRepository],
    controllers: [TodosController],
})
export class TodosModule {}