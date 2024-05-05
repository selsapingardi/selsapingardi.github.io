import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import degrees from '../../../assets/json/education.json';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, LowerCasePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  degrees = degrees;
}
