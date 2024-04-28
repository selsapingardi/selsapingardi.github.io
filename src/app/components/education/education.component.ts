import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const svgIcons = [
  {
    name: 'unity',
    svg: `<svg width="9" height="10" viewBox="-1 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.02634 0L0 2.33242V6.99687L1.54365 6.10234V4.27453C1.54435 4.24312 1.56117 4.2143 1.58827 4.19898C1.60158 4.19116 1.61671 4.18698 1.63214 4.18687C1.64757 4.18676 1.66275 4.19072 1.67617 4.19836L3.55168 5.2843C3.57854 5.29994 3.60083 5.32239 3.61632 5.34941C3.6318 5.37642 3.63993 5.40704 3.6399 5.4382V7.61008C3.63972 7.62555 3.63558 7.64072 3.62788 7.65413C3.62017 7.66753 3.60916 7.67873 3.59591 7.68664C3.58267 7.69444 3.56762 7.69863 3.55227 7.69879C3.53692 7.69896 3.52179 7.69509 3.50839 7.68758L1.93009 6.77211L0.385893 7.66742L4.41114 10L8.43686 7.6675L6.89383 6.77219L5.31623 7.68648C5.30281 7.6939 5.28771 7.69773 5.27239 7.69762C5.25707 7.69751 5.24203 7.69346 5.22871 7.68586C5.2154 7.67807 5.20433 7.66695 5.19658 7.65358C5.18883 7.64022 5.18466 7.62507 5.18448 7.60961V5.43813C5.18448 5.37406 5.2175 5.31625 5.27271 5.28438L7.1472 4.1982C7.16054 4.19055 7.17567 4.18658 7.19104 4.18669C7.20641 4.1868 7.22148 4.19099 7.23472 4.19883C7.26213 4.21414 7.27926 4.24297 7.27949 4.27437V6.10219L8.82353 6.99703V2.33242H8.82283L4.79805 0V1.78906L6.37557 2.70281C6.40259 2.71875 6.41878 2.74789 6.41878 2.77969C6.41878 2.81117 6.40228 2.84008 6.37557 2.85594L4.50037 3.94281C4.47342 3.95814 4.44298 3.96619 4.412 3.96619C4.38102 3.96619 4.35057 3.95814 4.32362 3.94281L2.44897 2.85594C2.43566 2.84821 2.42461 2.83708 2.41696 2.82369C2.4093 2.8103 2.4053 2.79512 2.40537 2.77969C2.40523 2.76415 2.40919 2.74886 2.41685 2.73536C2.42451 2.72186 2.43559 2.71063 2.44897 2.70281L4.02626 1.78906L4.02634 0Z" fill="currentColor"/>
</svg>`,
  },
];

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, LowerCasePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  degrees = [
    {
      year: 2022,
      gpa: 3.62,
      degree: 'BSc Computer Science (Web Programming) (Hons)',
      university: 'UOW Malaysia KDU Penang University College',
      awards: [
        "2020 January Semester Dean's List Awardee",
        '2018 International Bursary Award Scholarship Recipient',
      ],
      links: [
        {
          name: 'Pet Treck',
          link: 'https://selsapingardi.itch.io/pet-treck',
        },
        {
          name: 'HappyJobs.com',
          link: '#',
        },
        {
          name: 'PizzaGang',
          link: '#',
        },
      ],
      technologies: ['Unity', 'Angular'],
      languages: ['C#', 'HTML & SCSS', 'TypeScript', 'JavaScript'],
    },
  ];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    svgIcons.forEach((icon) => {
      iconRegistry.addSvgIconLiteral(
        icon.name,
        sanitizer.bypassSecurityTrustHtml(icon.svg)
      );
    });
  }
}
