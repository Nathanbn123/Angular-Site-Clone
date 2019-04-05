import { Component, OnInit } from '@angular/core';
import { Flag } from '../models/flag.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent {
  albums: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.Flags = database.list('Flags');
}




}
