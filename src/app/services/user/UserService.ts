import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userType: string = '';  // Variable para almacenar el tipo de usuario

    setUserType(type: string) {
        this.userType = type;
    }

    getUserType() {
        return this.userType;
    }
}
