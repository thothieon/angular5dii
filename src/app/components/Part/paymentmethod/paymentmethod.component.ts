import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-paymentmethod',
  imports: [CommonModule],
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.scss']
})
export class PaymentmethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
