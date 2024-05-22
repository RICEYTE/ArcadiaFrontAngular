import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HabitatsComponent } from './habitats/habitats.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AnimalsDetailComponent } from './animals-detail/animals-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'habitats', component: HabitatsComponent },
    { path: 'administrateur', component: AdministrateurComponent },
   { path: 'animals', component: AnimalsListComponent },
{ path: 'animal/:id', component: AnimalsDetailComponent },
    { path: '**', component: PageNotFoundComponent },
];
