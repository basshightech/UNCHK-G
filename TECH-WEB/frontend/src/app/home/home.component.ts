import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  universityName = 'Université Cheikh Hamidou KANE';

  profiles = [
    { title: '🎓 Étudiant', route: '/etudiant' },
    { title: '👨‍🏫 Formateur', route: '/formateur' },
    { title: '🏛️ Administration', route: '/administration' },
    { title: '📊 Appui à l\'Insertion', route: '/insertion' }
  ];
}
