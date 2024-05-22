import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ANIMALS } from '../animal/mock-animals';
import { AVIS } from '../avis/mock-avis';
import { CardBorderDirective } from '../card-border.directive';
import { AvisListComponent } from "../avis-list/avis-list.component";
import { PresentationComponent } from "../presentation/presentation.component";
import { ServicesListComponent } from "../services-list/services-list.component";
@Component({
    selector: 'app-accueil',
    standalone: true,
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css',
    imports: [
        CommonModule,
        AvisListComponent,
        PresentationComponent,
        ServicesListComponent
    ]
})



export class AccueilComponent {
  animals= ANIMALS;
  avis=AVIS;
}
