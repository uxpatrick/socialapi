/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers(): string {
        let abc = Math.random() * 33
        return abc.toString();
    }
}
