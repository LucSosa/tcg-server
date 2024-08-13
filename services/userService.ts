import { User, UserRepository } from "../repositories/userRepository";

export interface UserCredencial {
    usernameEmail?: string;
    password: string;
}

export class UserService {
    userRepository: UserRepository = new UserRepository;

    public authenticateUser(credential: UserCredencial): boolean {
        if(credential.usernameEmail) {
            const user = this.userRepository.getUser(credential.usernameEmail, credential.usernameEmail);
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