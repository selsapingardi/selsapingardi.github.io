import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const svgIcons = [
  {
    name: 'angular',
    svg: `<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.14607 6.2971H6.00777L5.07692 4.04799L4.14607 6.2971ZM5.07692 0.5L0 2.32679L0.776931 9.09621L5.07692 11.5L9.37692 9.09621L10.1538 2.32679L5.07692 0.5ZM8.25794 8.89241H7.07056L6.43044 7.28661H3.72829L3.08818 8.89241H1.89835L5.07692 1.7154L8.25794 8.89241Z" fill="currentColor"/>
</svg>`,
  },
  {
    name: 'flutter',
    svg: `<svg width="9" height="10" viewBox="-1 -1 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.153839 5.01562L5.15384 0H8.23196L1.70071 6.53125L0.153839 5.01562ZM5.15384 10H8.23196L5.5679 7.33594L8.23196 4.61719H5.15384L2.48978 7.30469L5.15384 10Z" fill="currentColor"/>
</svg>`,
  },
  {
    name: 'laravel',
    svg: `<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9112 2.98857C10.9095 2.98357 10.9075 2.97869 10.9052 2.97396C10.9021 2.96472 10.8983 2.95574 10.8938 2.9471C10.8903 2.94174 10.8864 2.93664 10.8822 2.93185C10.8774 2.9248 10.8723 2.91805 10.8667 2.91165C10.8618 2.90693 10.8555 2.90306 10.8502 2.89876C10.844 2.89348 10.8376 2.88861 10.8308 2.88415L8.76274 1.69349C8.73661 1.67841 8.70697 1.67046 8.6768 1.67046C8.64663 1.67046 8.61699 1.67841 8.59086 1.69349L6.52235 2.8848C6.51572 2.88929 6.5094 2.89425 6.50345 2.89962C6.49759 2.90355 6.49199 2.90786 6.48669 2.91251C6.48106 2.91879 6.47589 2.92547 6.47122 2.93249C6.46757 2.93765 6.46284 2.94216 6.45962 2.94775C6.45528 2.95643 6.45154 2.9654 6.44845 2.9746C6.44673 2.97954 6.44394 2.98405 6.44243 2.98921C6.43849 3.00378 6.43647 3.0188 6.43642 3.0339V5.29491L4.71295 6.28727V1.863C4.71298 1.84783 4.71096 1.83273 4.70693 1.8181C4.70564 1.81294 4.70263 1.80843 4.70091 1.80349C4.69791 1.79433 4.69418 1.78542 4.68974 1.77685C4.68674 1.77126 4.68179 1.76675 4.67814 1.76138C4.67342 1.75433 4.66825 1.74759 4.66267 1.74119C4.65731 1.7366 4.65172 1.7323 4.64591 1.7283C4.63989 1.72307 4.63358 1.71819 4.62701 1.71369L2.55828 0.523027C2.53216 0.507942 2.50252 0.5 2.47235 0.5C2.44218 0.5 2.41254 0.507942 2.38641 0.523027L0.318117 1.71369C0.311402 1.71808 0.305077 1.72304 0.299211 1.72851C0.293286 1.73244 0.287617 1.73675 0.282238 1.7414C0.276681 1.74769 0.271584 1.75437 0.266984 1.76138C0.263117 1.76675 0.25839 1.77126 0.255168 1.77685C0.250765 1.7854 0.2471 1.79432 0.244211 1.80349C0.241864 1.80817 0.239784 1.81297 0.23798 1.81789C0.234028 1.8326 0.232006 1.84777 0.231965 1.863V8.94638C0.231882 8.97663 0.239785 9.00636 0.254874 9.03258C0.269964 9.0588 0.291705 9.08057 0.317902 9.09569L4.45363 11.477C4.46282 11.4817 4.47238 11.4855 4.4822 11.4886C4.48672 11.4903 4.49101 11.4929 4.49574 11.4942C4.52459 11.5019 4.55497 11.5019 4.58383 11.4942C4.58812 11.4931 4.59177 11.4908 4.59564 11.4895C4.60601 11.4862 4.61608 11.482 4.62572 11.477L8.76274 9.09569C8.78893 9.08057 8.81067 9.0588 8.82576 9.03258C8.84085 9.00636 8.84876 8.97663 8.84867 8.94638V6.68494L10.8304 5.54391C10.8567 5.52869 10.8786 5.50675 10.8937 5.48033C10.9088 5.45391 10.9166 5.42395 10.9163 5.39352V3.03347C10.9164 3.01835 10.9147 3.00327 10.9112 2.98857ZM2.47213 0.871287L4.19496 1.86279L2.47192 2.85493L0.749307 1.863L2.47213 0.871287ZM4.36812 2.16035V6.48557L3.36846 7.06113L2.64465 7.47793V3.15335L3.64432 2.57779L4.36812 2.16035ZM4.36812 11.0286L0.576573 8.84669V2.16121L1.30038 2.57757L2.29983 3.15335V7.77634C2.30027 7.78284 2.30113 7.7893 2.30241 7.79568C2.30292 7.8042 2.30407 7.81268 2.30584 7.82103C2.30803 7.82769 2.31076 7.83416 2.31401 7.84037C2.3164 7.84777 2.31942 7.85496 2.32303 7.86185C2.327 7.86768 2.33131 7.87327 2.33592 7.87861C2.34022 7.88495 2.34496 7.89098 2.3501 7.89666C2.35504 7.90138 2.36127 7.90482 2.36665 7.90912C2.37251 7.91421 2.37868 7.91895 2.38512 7.9233L4.36576 9.04435L4.36812 11.0286ZM4.54 8.74765L2.81996 7.77398L4.62658 6.73392L6.60872 5.59289L8.33026 6.58396L7.06698 7.30498L4.54 8.74765ZM8.50428 8.84583L4.71252 11.0297V9.04649L7.52094 7.44377L8.50428 6.88195V8.84583ZM8.50428 6.28641L7.78047 5.87111L6.78081 5.29555V3.33145L7.50462 3.74825L8.50428 4.32424V6.28641ZM8.67616 4.02454L6.95311 3.03261L8.67616 2.04089L10.3988 3.03239L8.67616 4.02454ZM8.84803 6.28641V4.32424L9.84984 3.74825L10.5734 3.33145V5.29491L8.84803 6.28641Z" fill="currentColor"/>
</svg>`,
  },
  {
    name: 'figma',
    svg: `<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.41808 3.50059C5.81598 3.50059 6.19759 3.34252 6.47895 3.06116C6.76031 2.7798 6.91837 2.3982 6.91837 2.00029C6.91837 1.60239 6.76031 1.22079 6.47895 0.939426C6.19759 0.658066 5.81598 0.5 5.41808 0.5L2.41749 0.5C2.01982 0.5 1.63844 0.657974 1.35725 0.939168C1.07605 1.22036 0.918079 1.60174 0.918079 1.99941C0.918079 2.39708 1.07605 2.77847 1.35725 3.05966C1.63844 3.34085 2.01982 3.49883 2.41749 3.49883C2.01959 3.49883 1.63799 3.65689 1.35663 3.93825C1.07527 4.21961 0.9172 4.60122 0.9172 4.99912C0.9172 5.39702 1.07527 5.77863 1.35663 6.05999C1.63799 6.34135 2.01959 6.49941 2.41749 6.49941C2.12076 6.49924 1.83065 6.58706 1.58383 6.75177C1.33701 6.91648 1.14458 7.15068 1.03086 7.42476C0.917147 7.69883 0.887259 8.00047 0.944978 8.29154C1.0027 8.5826 1.14543 8.85001 1.35513 9.05995C1.56482 9.2699 1.83207 9.41294 2.12306 9.471C2.41405 9.52906 2.71573 9.49953 2.98994 9.38613C3.26415 9.27274 3.49857 9.08058 3.66357 8.83396C3.82857 8.58733 3.91673 8.29732 3.91691 8.00059V3.50059H5.41808ZM5.41808 3.50059C5.12152 3.50059 4.83163 3.58853 4.58505 3.75328C4.33847 3.91804 4.14629 4.15222 4.0328 4.4262C3.91931 4.70018 3.88962 5.00166 3.94748 5.29252C4.00533 5.58338 4.14814 5.85055 4.35783 6.06025C4.56753 6.26994 4.8347 6.41275 5.12556 6.4706C5.41642 6.52846 5.7179 6.49876 5.99188 6.38528C6.26586 6.27179 6.50004 6.07961 6.6648 5.83303C6.82955 5.58645 6.91749 5.29656 6.91749 5C6.91745 4.60234 6.75946 4.22099 6.47827 3.93981C6.19709 3.65862 5.81573 3.50063 5.41808 3.50059Z" fill="currentColor"/>
</svg>`,
  },
];

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, LowerCasePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = [
    {
      date: 'FEB 2022 - PRESENT',
      title: 'Programmer',
      employment: 'Full-Time',
      company: 'PT. Makmur Supra Nusantara',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sodales ut etiam sit amet nisl purus in mollis nunc. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.',
      links: [
        {
          name: 'Rambutan Website',
          link: 'https://www.rbt.tbindosatu.com',
        },
        {
          name: 'Rambutan App',
          link: 'https://play.google.com/store/apps/details?id=com.intidata.rambutan',
        },
        {
          name: 'PayPort',
          link: 'https://payport.makmursupranusantara.com',
        },
        {
          name: 'MSTR',
          link: 'https://mstr.id',
        },
      ],
      technologies: ['Angular', 'Flutter', 'Laravel', 'Figma'],
      languages: ['HTML & SCSS', 'TypeScript', 'Dart', 'PHP'],
    },
    {
      date: 'SEP 2021 - FEB 2022',
      title: 'Junior Programmer',
      employment: 'Part-Time',
      company: 'Guggemo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sodales ut etiam sit amet nisl purus in mollis nunc. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.',
      links: [
        {
          name: 'Guggemo',
          link: 'https://www.guggemo.com',
        },
      ],
      technologies: ['Angular'],
      languages: ['HTML & SCSS', 'TypeScript'],
    },
    {
      date: 'MAR 2021 - AUG 2021',
      title: 'Web Developer Intern',
      employment: 'Internship',
      company: 'Penang Science Cluster',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sodales ut etiam sit amet nisl purus in mollis nunc. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.',
      links: [
        {
          name: 'Girls in Engineering & Tech',
          link: 'https://www.girl-engineer-tech.me',
        },
      ],
      languages: ['HTML & SCSS', 'JavaScript', 'Canva'],
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
