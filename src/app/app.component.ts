import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel app';
  items: Observable<any[]>;

  constructor (db: AngularFireDatabase) {
    this.items = db.list('flamelink/environments/production/content/schemaDemo/en-US').valueChanges();
  }
}
