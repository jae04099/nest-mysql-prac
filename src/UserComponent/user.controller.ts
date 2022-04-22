import { Controller, Get } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
