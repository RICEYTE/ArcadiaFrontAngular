import { Component } from '@angular/core';
import { AnimalsListComponent } from "../animals-list/animals-list.component";

@Component({
    selector: 'app-presentation',
    standalone: true,
    templateUrl: './presentation.component.html',
    styleUrl: './presentation.component.css',
    imports: [AnimalsListComponent]
})
export class PresentationComponent {

}
