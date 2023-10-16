import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Owner} from "../../model/owner/owner";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  ownerList: Owner[] = [];

  findAll(): Observable<Owner[]>{
    return this.http.get<Owner[]>('http://localhost:8090/owner');
  }

  findById(id:number ): Observable<Owner>{
    return this.http.get<Owner>("http://localhost:8090/owner/" + id);
  }


  findOwnerByPets_Id(id:number ): Observable<Owner>{
    return this.http.get<Owner>("http://localhost:8090/owner/pet/" + id);
  }

  addOwner(newOwner: Owner) {
    this.http.post("http://localhost:8090/owner", newOwner).subscribe();
  }

  updateOwner(changedOwner: Owner) {
    this.http.put("http://localhost:8090/owner", changedOwner).subscribe();
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/owner/" + id).subscribe();
  }

  login(idCard: number): Observable<Owner> {
    return this.http.get<Owner>("http://localhost:8090/login/owner/" + idCard);
  }

  ownerExistsByIdCard(idCard: number): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8090/owner/exists/idCard/" + idCard);
  }

  ownerExistsByEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8090/owner/exists/email/" + email);
  }

  ownerExistsByPhone(phone: string): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8090/owner/exists/phone/" + phone);
  }

  findByIDCard(idCard: number): Observable<Owner> {
    return this.http.get<Owner>("http://localhost:8090/owner/idCard/" + idCard);
  }
}
