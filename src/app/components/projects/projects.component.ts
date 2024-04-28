import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      year: 2024,
      platform: 'Medium',
      title: 'Integrating Google Maps in Angular 17',
      link: 'https://medium.com/@selsa-pingardi/integrating-google-maps-in-angular-17-66487ed2238c',
    },
    {
      year: 2021,
      platform: 'itch.io',
      title: 'Pet Treck: A Fitness Tracking Website & Mobile Application',
      link: 'https://selsapingardi.itch.io/pet-treck',
    },
  ];
}
