import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HabitatsComponent } from './habitats/habitats.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'habitats', component: HabitatsComponent },
    { path: 'administrateur', component: AdministrateurComponent },
    { path: '', component: AccueilComponent }
];
