import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  paragraphs = [
    'Potenti nullam ac tortor vitae purus faucibus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.',
    'At risus viverra adipiscing at in. Faucibus a pellentesque sit amet porttitor eget dolor. Nulla porttitor massa id neque aliquam. Id faucibus nisl tincidunt eget nullam non nisi. Amet aliquam id diam maecenas ultricies mi eget mauris. Non odio euismod lacinia at quis risus.',
    'Placerat duis ultricies lacus sed turpis. Senectus et netus et malesuada fames ac turpis egestas. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Etiam non quam lacus suspendisse faucibus.',
  ];
}
