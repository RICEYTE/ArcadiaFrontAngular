import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AnimalService } from '../animal.service';
import { ANIMALS } from '../animal/mock-animals';

@Component({
  selector: 'app-animals-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './animals-detail.component.html',
  styleUrl: './animals-detail.component.css'
})
export class AnimalsDetailComponent implements OnInit {


animalList: Animal[] | undefined;
animal: Animal | undefined;

constructor(
  private router: Router,
  private route: ActivatedRoute,

){}


ngOnInit(): void {
    const animalId: String|null = this.route.snapshot.paramMap.get('id');

    if(animalId){
      this.animal=ANIMALS[+animalId];
      
    }
  }
  
    goToAnimalList() {
      this.router.navigate(['/animals']);
    }
  
    goToEditAnimal(animal: Animal) {
      this.router.navigate(['/edit/animal', animal.id]);
    }
}


