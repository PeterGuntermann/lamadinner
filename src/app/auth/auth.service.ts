import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { DatabaseService } from "../database/database.service";
import { Player } from "../models/player";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User;

  constructor(public databaseService: DatabaseService, public angularFireAuth: AngularFireAuth) {
    this.currentUser = this.angularFireAuth.auth.currentUser;
  }

  get authState() {
    return this.angularFireAuth.authState;
  }

  get user() {
    return this.angularFireAuth.user;
  }

  async loginAsNewPlayer(displayName: string) {
    await this.angularFireAuth.auth.signInAnonymously()
    await this.currentUser.updateProfile({
      displayName: displayName
    });

    const player: Player = {
      uid: this.currentUser.uid,
      displayName: this.currentUser.displayName
    };
    this.databaseService.addPlayer(player);
  }

  async logout() {
    await this.angularFireAuth.auth.signOut();
  }
}
