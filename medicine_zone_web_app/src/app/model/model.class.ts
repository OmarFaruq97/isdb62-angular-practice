export class User{
    public name: string;

    constructor(name: string){
        this.name = name;
    }
}


export interface LoginRequest {
    email: string;
    password: string;
  }

export class LoginRequest{
    
    public password: string;
    constructor(username: string, password: string){
        
        this.password = password;
    }
}

export class RegisterRequest {
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public email: string;
    public password: string;
    public role: string;

    constructor(firstName: string, lastName: string, phoneNumber: string, email: string, password: string, role: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}