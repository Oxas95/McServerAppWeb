import { Component, OnInit } from '@angular/core';
import { PlayerSession } from 'src/app/interfaces/player-session';
import { PlayerSessionService } from 'src/app/services/player-session/player-session.service';

@Component({
  selector: 'app-player-access',
  templateUrl: './player-access.component.html',
  styleUrls: ['./player-access.component.css']
})
export class PlayerAccessComponent implements OnInit {

  session?: PlayerSession;

  constructor(
    private playerSessionService: PlayerSessionService
  ) { }

  ngOnInit(): void {
    this.session = this.playerSessionService.getSession();
  }

}
