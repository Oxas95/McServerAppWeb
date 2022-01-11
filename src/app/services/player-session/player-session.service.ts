import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlayerSession } from 'src/app/interfaces/player-session';

@Injectable({
  providedIn: 'root'
})
export class PlayerSessionService {

  playerSession: PlayerSession = this.getEmptyPlayerSession();

  constructor() { }

  login(pseudo: string) {
    //not yet implemented
    this.playerSession = { //simulate login
      pseudo: pseudo,
      token: '0000',
      access: 3,
    };
  }

  getSession(): PlayerSession  {
    return this.playerSession;
  }

  logout() {
    this.playerSession = this.getEmptyPlayerSession();
  }

  private getEmptyPlayerSession(): PlayerSession {
    return {
      pseudo: "",
      token: "",
      access: undefined
    };
  }

  isActive(): boolean {
    return this.playerSession.pseudo != "" 
      && this.playerSession.token != ""
      && this.playerSession.access != undefined;
  }

  isValid() {
    // TODO: not yet implemented
  }
}
