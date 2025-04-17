import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatToolbarModule],
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etudiant = {
    id: 'ET123456',
    ine: 'INE20250011',
    nom: 'Faye',
    prenom: 'Bassirou',
    dateNaissance: '2000-06-18',
    formation: 'Master Ingénierie Logicielle',
    promo: 'P7',
    anneeDebut: 2023,
    anneeSortie: 2025,
    diplomes: ['Licence Informatique', 'Certification Angular'],
    autresFormations: ['Formation Sécurité Web']
  };
}
