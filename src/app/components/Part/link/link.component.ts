import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../../shared-material/shared-material.module';

@Component({
  standalone: true,
  selector: 'app-link',
  imports: [CommonModule, SharedMaterialModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
