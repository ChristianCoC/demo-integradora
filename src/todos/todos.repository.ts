import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosRepository {
  private todos = [
    {
      id: 1,
      title: "Todo 1",
      description: "Todo 1 description",
      completed: false
    },
    {
      id: 2,
      title: "Todo 2",
      description: "Todo 2 description",
      completed: false
    },
    {
      id: 3,
      title: "Todo 3",
      description: "Todo 3 description",
      completed: false
    }
  ];
  async getTodos() {
    return this.todos;
  }
}