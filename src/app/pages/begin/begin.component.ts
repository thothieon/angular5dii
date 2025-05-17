import { Component } from '@angular/core';

//import { DealerComponent } from '../../components/dealer/dealer.component';
import { FewalbumsComponent } from '../../components/fewalbums/fewalbums.component';
import { FootComponent } from '../../components/foot/foot.component';
import { HearsayComponent } from '../../components/hearsay/hearsay.component';
import { HeadComponent } from '../../components/head/head.component';
import { LinkComponent } from '../../components/link/link.component';

@Component({
  selector: 'app-begin',
  standalone: true,
  imports: [
    //DealerComponent,
    HeadComponent,
    HearsayComponent,
    LinkComponent,
    FewalbumsComponent,
    FootComponent
  ],
  templateUrl: './begin.component.html',
  styleUrl: './begin.component.scss'
})
export class BeginComponent {

}