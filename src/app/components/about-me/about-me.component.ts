import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import bulletPoints from '../../../assets/json/bullet-points.json';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  paragraphs = [
    "When I was young, I always wanted to become an inventor and although things didn't pan out the way 10-year-old me would have hoped, I did become an inventor of sorts. I get to build things, though mostly digitally, like websites and applications. I still get to plan and design prototypes to visualize my ideas. Best of all, I get to help people turn their imagination into reality.",
    "With the passion I have for design and coding, I thrive most when the projects I work on are beautifully crafted as they are highly functional. And just like how technology continues to evolve, I always strive to become a better developer through the experiences I've gained, the lessons I've learnt and the people I've met.",
    "Over the past few years, I've had the opportunity to work on some impactful projects with like-minded people, and currently, I'm focused on creating several applications within my current company, including redeveloping an outdated web order management system that is widely used by staff and clients alike.",
    'At the moment, I am most familiar with the Angular framework, however, I have been exploring Flutter for the past year. I also have experience in designing with Figma, Photoshop and Illustrator. Below are the technical highlights of my skills:',
  ];
  bulletPoints = bulletPoints;
}
