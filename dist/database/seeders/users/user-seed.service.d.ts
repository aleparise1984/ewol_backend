import { User } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class UserSeedService {
    private readonly userRepository;
    private readonly userService;
    constructor(userRepository: Repository<User>, userService: UsersService);
    run(): Promise<void>;
}
