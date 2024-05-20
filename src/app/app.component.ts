import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HabitatsComponent } from './habitats/habitats.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        AccueilComponent,
        ContactComponent,
        ServicesComponent,
        HabitatsComponent
    ]
})
export class AppComponent {
  title = 'ArcadiaFrontAngular';
}
