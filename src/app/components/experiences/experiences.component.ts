import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import experiences from '../../../assets/json/experiences.json';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, LowerCasePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = experiences;
}
