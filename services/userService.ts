import { User, UserRepository } from "../repositories/userRepository";

export interface UserCredencial {
    username?: string;
    email?: string;
    password: string;
}

export class UserService {
    userRepository: UserRepository = new UserRepository;

    public authenticateUser(credential: UserCredencial): boolean {
        if(credential.email || credential.username) {
            const user = this.userRepository.getUser(credential.username, credential.email);
            return user?.password === credential.password;
        }

        return false;
    }

    public addUser(user: User): User {
        return this.userRepository.addUser(user);
    }

    public getUser(username?: string, email?: string): User | undefined{
        return this.userRepository.getUser(username, email);
    }
}