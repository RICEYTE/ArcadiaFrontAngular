import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ANIMALS } from '../animal/mock-animals';
import { AVIS } from '../avis/mock-avis';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
  CommonModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})



export class AccueilComponent {
  animals= ANIMALS;
  avis=AVIS;
}
