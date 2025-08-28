import { Component } from '@angular/core';
import { WhoWeAreComponent } from '../components/who-we-are/who-we-are';
import { PartnershipsComponent } from '../components/partnerships/partnerships';
import { ElmonxAppsComponent } from '../components/elmonx-apps/elmonx-apps';

@Component({
  selector: 'app-index',
  imports: [
    WhoWeAreComponent,
    PartnershipsComponent,
    ElmonxAppsComponent
  ],
  templateUrl: './index.html',
  styleUrl: './index.scss'
})
export class Index {

}
