import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel app';
  items: Observable<any[]>;

  constructor () {
    // this.items = db.collection('items').valueChanges();
  }
}
