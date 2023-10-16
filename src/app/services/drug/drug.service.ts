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

  addDrug(newDrug: Drug) {
    this.http.post("http://localhost:8090/drug", newDrug).subscribe();
  }

  updateDrug(changedDrug: Drug) {
    this.http.put("http://localhost:8090/drug", changedDrug).subscribe();
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/drug/" + id).subscribe();
  }
}
