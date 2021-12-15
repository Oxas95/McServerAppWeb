import { Injectable } from '@angular/core';
import { PlayerSession } from 'src/app/interfaces/player-session';

@Injectable({
  providedIn: 'root'
})
export class PlayerSessionService {

  playerSession: PlayerSession = this.getEmptyPlayerSession();

  constructor() { }

  setSession(player: PlayerSession) {
    this.playerSession = player;
  }

  getSession(): PlayerSession {
    return this.playerSession;
  }

  clearSession() {
    this.playerSession = this.getEmptyPlayerSession();
  }

  private getEmptyPlayerSession(): PlayerSession {
    return {
      pseudo: "",
      token: "",
      access: undefined
    };
  }

  isActive() {
    return this.playerSession.pseudo! && this.playerSession.token! && this.playerSession.access!;
  }
}
