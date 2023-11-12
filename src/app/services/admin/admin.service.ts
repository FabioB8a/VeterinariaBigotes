import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinarian} from "../../model/veterinarian/veterinarian";
import {UserEntity} from "../../model/user/user";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(user: UserEntity): Observable<String> {
      return this.http.post<String>("http://localhost:8090/login/admin", user,
          {
              responseType: 'text' as 'json'
          });
  }
}
