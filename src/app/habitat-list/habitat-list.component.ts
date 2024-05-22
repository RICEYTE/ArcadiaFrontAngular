import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HABITATS } from '../habitat/mock-habitats';
import { Habitat } from '../habitat/habitat';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-habitat-list',
  standalone: true,
  imports: [
    CommonModule,
   RouterModule
  ],
  templateUrl: './habitat-list.component.html',
  styleUrl: './habitat-list.component.css'
})



export class HabitatListComponent implements OnInit {

  habitatList: Habitat[] | undefined;

  constructor(
    private router: Router,
      ){ }

  ngOnInit(){

    this.habitatList = HABITATS;
  }

  goToHabitat(habitat: Habitat) {
    this.router.navigate(['/habitat',habitat.id]);
  }


}
