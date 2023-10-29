import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinarian} from "../../model/veterinarian/veterinarian";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(idCard: number, password: String): Observable<Boolean> {
    return this.http.get<Boolean>("http://localhost:8090/login/admin/" + idCard + "/" + password);
  }
}
