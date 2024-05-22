import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HabitatsComponent } from './habitats/habitats.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AnimalsDetailComponent } from './animals-detail/animals-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { HabitatListComponent } from './habitat-list/habitat-list.component';
import { HabitatDetailComponent } from './habitat-detail/habitat-detail.component';
import { ServicesListComponent } from './services-list/services-list.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesListComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'habitats', component: HabitatListComponent },
    { path: 'habitat/:id', component: HabitatDetailComponent },
    { path: 'administrateur', component: AdministrateurComponent },
    { path: 'animals', component: AnimalsListComponent },
    { path: 'animal/:id', component: AnimalsDetailComponent },
    { path: '**', component: PageNotFoundComponent },
];
