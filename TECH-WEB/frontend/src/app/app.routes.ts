import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'register', component: InscriptionComponent },
  { path: 'etudiant', component: EtudiantComponent },
];
