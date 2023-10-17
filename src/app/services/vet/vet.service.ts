import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Veterinarian } from 'src/app/model/veterinarian/veterinarian';
import { Observable } from 'rxjs';

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

  login(idCard: number, password: String): Observable<Veterinarian> {
    return this.http.get<Veterinarian>("http://localhost:8090/login/vet/" + idCard + "/" + password);
  }

}
