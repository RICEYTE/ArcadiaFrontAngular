import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimalsListComponent } from "../animals-list/animals-list.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-habitats',
    standalone: true,
    templateUrl: './habitats.component.html',
    styleUrl: './habitats.component.css',
    imports: [
        CommonModule,
        AnimalsListComponent,
        RouterModule
    ]
})
export class HabitatsComponent {

}
