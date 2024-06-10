import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  private users = [
    {
      id: 1,
      name: "User 1",
      email: "qOZ8H@example.com",
    },
    {
      id: 2,
      name: "User 2",
      email: "qOZ8H@example.com",
    },
    {
      id: 3,
      name: "User 3",
      email: "qOZ8H@example.com",
    },
  ];

  async getUsers() {
    return this.users;
  }
};