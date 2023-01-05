import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Mayank',
            username: 'mayank',
            password: '123456789',
        },
        {
            id: 2,
            name: 'Maya',
            username: 'maya',
            password: '1234567',
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
