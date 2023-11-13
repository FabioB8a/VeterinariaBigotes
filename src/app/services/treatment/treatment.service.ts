import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Treatment } from 'src/app/model/treatment/treatment';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private http: HttpClient) { }

  treatmentList: Treatment[] = []

  findAll(): Observable<Treatment[]>{
    return this.http.get<Treatment[]>('http://localhost:8090/treatment');
  }

  findById(id:number ): Observable<Treatment>{
    return this.http.get<Treatment>("http://localhost:8090/treatment/" + id);
  }

  addTreatment(newTreatment: Treatment):Observable<Treatment> {
    return this.http.post<Treatment>("http://localhost:8090/treatment", newTreatment);
  }

  updateTreatment(changedTreatment: Treatment) {
    this.http.put("http://localhost:8090/treatment", changedTreatment).subscribe();
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/treatment/" + id).subscribe();
  }

  getCountTreatmentsByMonth(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/treatment/count');
  }

  showTreatmentbyPet(id: number): Observable<Treatment[]>{
    return this.http.get<Treatment[]>('http://localhost:8090/treatment/pet/' + id);
  }

    showTreatmentbyVet(id: number): Observable<Treatment[]>{
        return this.http.get<Treatment[]>('http://localhost:8090/treatment/vet/' + id);
    }
}
