import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    MatDivider,
    MatIcon,
    MatCheckbox,
    MatFormField,
    MatSelectModule,
    MatLabel,
    MatOption,
    AboutMeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    EducationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  darkTheme = signal(false);

  navLinks = [
    'about me',
    'experiences',
    'projects',
    'education'
  ]

  constructor() {
    effect(() => {
      document.body.classList.toggle('dark', this.darkTheme());
    });
  }
}
