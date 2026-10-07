import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto.js';
import { UpdateUserDto } from './update-user.dto.js';
import { UserService } from './user.service.js';
import { RoleGuard } from '../guards/role.guard.js';



@Controller('user')
@UseGuards(RoleGuard)
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
    @Put(':id')
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updateUser(updateUserDto, id);
    }
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}