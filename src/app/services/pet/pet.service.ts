import {Injectable} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http: HttpClient
  ) { }

  petList: Pet[] = [];
  
  // Finalizar la dirección URL
  findAll(): Observable<Pet[]>{
    return this.http.get<Pet[]>('http://localhost:8090/pet');
  }

  // Finalizar la dirección URL
  findByOwner(id:number): Observable<Pet[]>{
    return this.http.get<Pet[]>('http://localhost:8090/pet/owner/' + id);
  }

  // Finalizar la dirección URL
  findById(id:number): Observable<Pet>{
    const pet = this.http.get<Pet>("http://localhost:8090/pet/" + id);
    return pet;
  }

  // Finalizar la dirección URL
  addPet(newPet: Pet) {
    this.http.post("http://localhost:8090/pet", newPet).subscribe();
  }

  // Finalizar la dirección URL
  updatePet(changedPet: Pet) {
    this.http.put("http://localhost:8090/pet", changedPet).subscribe();
  }
  // Finalizar la dirección URL
  deleteById(id: number) {
    this.http.delete("http://localhost:8090/pet" + id).subscribe();
  }
  
}
