import { Component, OnInit } from '@angular/core';
import { NotImplementedComponent } from "../not-implemented/not-implemented.component";
import { AnimalsListComponent } from "../animals-list/animals-list.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal/animal';
import { Habitat } from '../habitat/habitat';

@Component({
    selector: 'app-habitat-detail',
    standalone: true,
    templateUrl: './habitat-detail.component.html',
    styleUrl: './habitat-detail.component.css',
    imports: [NotImplementedComponent, AnimalsListComponent]
})


export class HabitatDetailComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  animalList: Animal[] | undefined;

  ngOnInit(): void {
    const habitatId: String|null = this.route.snapshot.paramMap.get('id');
    

  }

  getAnimalList(habitat: Habitat){
    return habitat.animals;
  }
}
