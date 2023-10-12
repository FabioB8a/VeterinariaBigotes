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
    return this.http.get<Veterinarian[]>('http://localhost:8090/owner');
  }

  findById(id:number ): Observable<Veterinarian>{
    return this.http.get<Veterinarian>("http://localhost:8090/vet/" + id);
  }

  addOwner(newVet: Veterinarian) {
    this.http.post("http://localhost:8090/vet", newVet).subscribe();
  }

  updateOwner(changedVet: Veterinarian) {
    this.http.put("http://localhost:8090/vet", changedVet).subscribe();
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/vet/" + id).subscribe();
  }

}
