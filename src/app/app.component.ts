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
import { SpyDirective, SpyTargetDirective } from '@thejlifex/ngx-scroll-spy';
import { NgComponentOutlet } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import svgIcons from '../assets/json/svg-icons.json';
import AOS from 'aos';

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
    SpyDirective,
    SpyTargetDirective,
    NgComponentOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  darkTheme = signal(localStorage.getItem('theme') === 'dark');
  currentSection = signal('about-me');
  year = new Date().getFullYear();

  name = 'Selsa Pingardi';
  job = 'Frontend Developer';
  description =
    'I design and develop responsive websites, web applications, and mobile applications.';
  sections = [
    { title: 'about me', id: 'about-me', component: AboutMeComponent },
    {
      title: 'experiences',
      id: 'experiences',
      component: ExperiencesComponent,
    },
    { title: 'projects', id: 'projects', component: ProjectsComponent },
    { title: 'education', id: 'education', component: EducationComponent },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.setDefaultFontSetClass('material-icons-round');
    svgIcons.forEach((icon) => {
      iconRegistry.addSvgIconLiteral(
        icon.name,
        sanitizer.bypassSecurityTrustHtml(icon.svg)
      );
    });
    effect(() => {
      localStorage.setItem('theme', this.darkTheme() ? 'dark' : 'light');
      document.body.classList.toggle('dark', this.darkTheme());
    });
  }

  ngOnInit() {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }

  scroll(el: string) {
    document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
  }
}
