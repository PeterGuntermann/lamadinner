import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";

// Best sources:
// https://www.npmjs.com/package/@angular/fire
// https://github.com/angular/angularfire/blob/HEAD/docs/rtdb/lists.md

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  games: any[];

  constructor(public db: AngularFireDatabase, public auth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.db.list("lamagames").valueChanges().subscribe(value => {
      this.games = value;
    })

    this.auth.user.subscribe(user => {
      if (user) {
        console.log("uid: " + user.uid);
        console.log("isAnonymous: " + user.isAnonymous);
        console.log("displayName: " + user.displayName);
        console.log(user);
      }
    });
  }

  async login() {
    await this.auth.auth.signInAnonymously()
  }

  async logout() {
    await this.auth.auth.signOut();
  }

}
