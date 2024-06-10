/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { LoggerMiddleware } from "../middlewares/logger.middleware";
import { UsersRepository } from "./users.repository";

@Module({
  imports: [],
  providers: [UsersService, UsersRepository,
    {
      provide: 'API_USERS',
      useFactory: async () => {
        const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json());

        return apiUsers.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }));
      }
    }
  ],
  controllers: [UsersController],
})
  
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('users');
    }
}



