import { Injectable } from '@angular/core';

import { PlayerSession } from '../../interfaces/player-session';
import { PlayerSessionService } from '../player-session/player-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session?: PlayerSession;

  redirectUrl: string | null = null;

  constructor(
    private playerSessionService: PlayerSessionService,
  ) { }

  getSession() {
    this.session = this.playerSessionService.getSession();
  }

  isLoggedIn() {
    return this.playerSessionService.isActive();
  }
}
