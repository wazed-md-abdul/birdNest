import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto.js';
import { UpdateUserDto } from './update-user.dto.js';

@Injectable()
export class UserService {
    private users = [
        { id: 1, name: 'Wazed Jiad', email: 'wazedjiad@gmail.com' },
        { id: 2, name: 'Abdul Karim', email: 'abdulkarim@gmail.com' },
        { id: 3, name: 'Sarah Ahmed', email: 'sarahahmed@gmail.com' },
        { id: 4, name: 'John Doe', email: 'johndoe@gmail.com' },
        { id: 5, name: 'Jane Smith', email: 'janesmith@gmail.com' },
        { id: 6, name: 'Rahim Uddin', email: 'rahimuddin@gmail.com' },
        { id: 7, name: 'Fatima Khan', email: 'fatimakhan@gmail.com' },
        { id: 8, name: 'Michael Brown', email: 'michaelbrown@gmail.com' },
    ];
    getUsers() {
        return this.users;
    }
    getUserById(id: number) {
        const user = this.users.find((user) => user.id === id)
        if (!user)
            throw new NotFoundException("User not found")

        return user;
    }
    createUser(createUserDto: CreateUserDto) {
        const user = this.users.find((user) => user.id === createUserDto.id)
        if (user)
            throw new NotFoundException("User already exists")

        return {
            data: createUserDto,
            message: 'User created successfully'
        }
    }
    updateUser(updateUserDto: UpdateUserDto, id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return 'User not found';
        }
        user.name = updateUserDto.name || user.name;
        user.email = updateUserDto.email || user.email;
        return {
            data: user,
            message: 'User updated successfully'
        }
    }
    deleteUser(id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return 'User not found';
        }
        this.users = this.users.filter((user) => user.id !== id);
        return {
            data: user,
            message: 'User deleted successfully'
        }
    }
}
