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

  getTop3Drug(): Observable<Drug[]>{
    return this.http.get<Drug[]>('http://localhost:8090/drug/top');
  }

  getTotalSales(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/drug/totalsales');
  }

  getTotalProfit(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/drug/totalprofits');
  }

  getTreatmentByMonth(): Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:8090/drug/treatmentbymonth');
  }
  findDrugsAvailabale(): Observable<Drug[]>{ // Retorna las drogas cuya cantidad de items disponibles es mayor a 0
    return this.http.get<Drug[]>('http://localhost:8090/drug/available');
  }
}
