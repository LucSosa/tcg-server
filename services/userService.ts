import { User, UserRepository } from "../repositories/userRepository";

export interface UserCredencial {
    usernameEmail?: string;
    password: string;
}

export class UserService {
    userRepository: UserRepository = new UserRepository;

    public authenticateUser(credential: UserCredencial): User |  null{
        if(credential.usernameEmail) {
            const isEmail = credential.usernameEmail.includes('@');
            const user = this.userRepository
                .getUser(!isEmail ? credential.usernameEmail : undefined, credential.usernameEmail);
            return user?.password === credential.password ? user : null;
        }

        return null;
    }

    public addUser(user: User): User {
        return this.userRepository.addUser(user);
    }

    public getUser(username?: string, email?: string): User | undefined{
        return this.userRepository.getUser(username, email);
    }
}