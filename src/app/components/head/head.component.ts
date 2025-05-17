import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

}
