import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { DatabaseKeys } from "./database/database-keys";
import { DatabaseService } from "./database/database.service";

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
  playerName: string;

  constructor(public authService: AuthService, public databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.databaseService.valueChangesObservable(DatabaseKeys.Lamagames).subscribe(value => {
      this.games = value;
    })

    this.authService.authState.subscribe(value => {
      console.log("authState: ", value);
    })

    this.authService.user.subscribe(user => {
      if (user) {
        console.log("uid: " + user.uid);
        console.log("isAnonymous: " + user.isAnonymous);
        console.log("displayName: " + user.displayName);
        console.log("user: ", user);
      }
    });
  }

  async login() {
    await this.authService.loginAsNewPlayer(this.playerName);
  }

  async logout() {
    this.resetPlayerName();
    await this.authService.logout();
  }

  private resetPlayerName() {
    this.playerName = "";
  }
}
