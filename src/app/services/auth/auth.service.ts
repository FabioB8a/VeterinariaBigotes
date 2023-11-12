import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserDTO} from "../../model/userDTO/user-DTO";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  public userType(jwt: String): Observable<UserDTO> {
    return this.http.post<UserDTO>("http://localhost:8090/login/userType", jwt)
  }
}
