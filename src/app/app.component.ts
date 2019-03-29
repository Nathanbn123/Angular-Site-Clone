import { Component, OnInit } from '@angular/core';
import { Flag } from './models/flag.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterFlagList: Flag[] = [
    new Flag('https://res.cloudinary.com/www-virgin-com/w_auto,c_scale,dpr_auto,f_auto,fl_lossy,q_auto/virgin-com-prod/sites/virgin.com/files/styles/sign_post__336x336_/public/conent_blocks/us_0.png?itok=e-lfafAH','USA')



  ]
}
