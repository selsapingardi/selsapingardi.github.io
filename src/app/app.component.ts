import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { LinksComponent } from './components/links/links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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
    ContactComponent,
    LinksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  darkTheme = signal(false);

  name = 'Selsa Pingardi';
  job = 'Frontend Developer';
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  navLinks = ['about me', 'experiences', 'projects', 'education'];

  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-icons-round');
    effect(() => {
      document.body.classList.toggle('dark', this.darkTheme());
    });
  }
}
