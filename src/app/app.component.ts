import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formGroup.reset();
      this.tabGroup.selectedIndex = 0; // Revenir au premier onglet
    } else {
      console.log("Le formulaire n'est pas valide");
    }
  }
}
