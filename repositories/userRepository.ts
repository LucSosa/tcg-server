export interface User{
    id: string;
    username: string;
    email: string;
    password: string;
}

export class UserRepository {
    data: User[] = [];
    
    public getUser(username?: string, email?: string): User | undefined {
        if(username){
            return this.data.find(user => user.username === username);
        }
        else {
            return this.data.find(user => user.email === email);
        }
    }

    public addUser(user: User): boolean {
        if(!this.getUser(user.username)) {
            this.data.push(user);
            return true;
        }

        return false;
    }
}