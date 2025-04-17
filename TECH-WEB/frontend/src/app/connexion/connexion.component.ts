import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // Pour les champs de saisie
import { MatButtonModule } from '@angular/material/button'; // Pour les boutons
import { MatCardModule } from '@angular/material/card'; // Pour les cartes
import { MatFormFieldModule } from '@angular/material/form-field'; // Pour les champs de formulaire

@Component({
  selector: 'app-connexion',
  imports: [ MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule ],
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Connexion réussie', this.form.value);
    }
  }
}
