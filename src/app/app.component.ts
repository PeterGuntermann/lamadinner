import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

// Best sources:
// https://www.npmjs.com/package/@angular/fire
// https://github.com/angular/angularfire/blob/HEAD/docs/rtdb/lists.md

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games: any[];

  constructor(db: AngularFireDatabase) {
    db.list("lamagames").valueChanges().subscribe(value => {
      this.games = value;
    })

  }
}
