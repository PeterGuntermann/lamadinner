import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Player } from "../models/player";
import { DatabaseKeys } from "./database-keys";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public database: AngularFireDatabase) {
  }

  addPlayer(player: Player) {
    this.database.list(DatabaseKeys.Players).push(player);
  }

  valueChangesObservable(databaseKey: string) {
    return this.database.list(databaseKey).valueChanges();
  }

}
