import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ANIMALS } from './animal/mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private http: HttpClient,
  ) { }

  getAnimalById(id: number){
    return ANIMALS[id];
  }

  deleteAnimalById(id: number){

  
  }

  getAnimaList(){
//mock
  return ANIMALS;
  }

}
