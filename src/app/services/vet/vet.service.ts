import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Veterinarian } from 'src/app/model/veterinarian/veterinarian';
import { Observable } from 'rxjs';
import {UserEntity} from "../../model/user/user";

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http: HttpClient) { }

  vetList: Veterinarian[] = [];

  findAll(): Observable<Veterinarian[]>{
    return this.http.get<Veterinarian[]>('http://localhost:8090/vet');
  }

  findById(id:number ): Observable<Veterinarian>{
    return this.http.get<Veterinarian>("http://localhost:8090/vet/" + id);
  }
  findByIdCard(id:number ): Observable<Veterinarian>{
    return this.http.get<Veterinarian>("http://localhost:8090/vet/idcard/" + id);
  }

  addVet(newVet: Veterinarian) {
    this.http.post("http://localhost:8090/vet", newVet).subscribe();
  }

  updateVet(changedVet: Veterinarian) {
    this.http.put("http://localhost:8090/vet", changedVet).subscribe();
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/vet/" + id).subscribe();
  }

  vetExists(idCard: number): Observable<Boolean> {
    return this.http.get<Boolean>("http://localhost:8090/vet/exists/" + idCard);
  }


  login(user: UserEntity): Observable<String> {
    return this.http.post<String>("http://localhost:8090/login/vet", user,
        {
          responseType: 'text' as 'json'
        });
  }





  getNumberOfActiveVets(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/vet/count/active');
  }

  getNumberOfInactiveVets(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/vet/count/inactive');
  }

  findAllActiveVeterinarians(): Observable<Veterinarian[]>{
    return this.http.get<Veterinarian[]>('http://localhost:8090/vet/active');
  }

  findAllInactiveVeterinarians(): Observable<Veterinarian[]>{
    return this.http.get<Veterinarian[]>('http://localhost:8090/vet/inactive');
  }

}
