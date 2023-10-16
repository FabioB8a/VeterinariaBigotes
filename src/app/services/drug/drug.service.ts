import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drug } from 'src/app/model/drug/drug';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http: HttpClient) { }

  drugList: Drug[] = [];

  findAll(): Observable<Drug[]>{
    return this.http.get<Drug[]>('http://localhost:8090/drug');
  }

  findById(id:number ): Observable<Drug>{
    return this.http.get<Drug>("http://localhost:8090/drug/" + id);
  }


  findOwnerByPets_Id(id:number ): Observable<Drug>{
    return this.http.get<Drug>("http://localhost:8090/drug/pet/" + id);
  }

  addOwner(newOwner: Drug) {
    this.http.post("http://localhost:8090/drug", newOwner).subscribe();
  }

  updateOwner(changedOwner: Drug) {
    this.http.put("http://localhost:8090/drug", changedOwner).subscribe();
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/drug/" + id).subscribe();
  }
}
