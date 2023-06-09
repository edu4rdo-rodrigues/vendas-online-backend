import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/createUser.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {} 

  
  @Post('post')
  async createUser(@Body() createUser : CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }


  @Get('get')
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUser(); //JSON.stringify({ test: 'abc' });
  }
}
