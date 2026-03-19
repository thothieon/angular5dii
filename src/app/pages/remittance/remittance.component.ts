import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LinkItem {
  label: string;
  url: string;
  iconClass: string;
}

@Component({
  selector: 'app-remittance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remittance.component.html',
  styleUrl: './remittance.component.scss'
})
export class RemittanceComponent {

  profile = {
    name: 'Yuhsin System Inc.',
    bio: 'Professional Dive Courses · Underwater Photography · Explore Every Moment of the Ocean',
    instagramUrl: 'https://www.instagram.com/yuhsinsystem.inc',
    facebookUrl: 'https://www.facebook.com/yuhsinsystem.inc',
  };

  links: LinkItem[] = [
    { label: 'Instagram', url: 'https://www.instagram.com/yuhsinsystem.inc', iconClass: 'ig-icon' },
    { label: 'Facebook',  url: 'https://www.facebook.com/yuhsinsystem.inc',  iconClass: 'fb-icon' },
    { label: 'LINE',      url: 'https://line.me/R/ti/p/@yuhsin',             iconClass: 'line-icon' },
    { label: '官方網站',   url: 'https://www.yuhsinsystem.com',               iconClass: 'web-icon' },
  ];
}
