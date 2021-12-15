import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerSession } from 'src/app/interfaces/player-session'; 
import { PlayerSessionService } from 'src/app/services/player-session/player-session.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  session: PlayerSession;

  constructor(
    private router: Router,
    private playerSession: PlayerSessionService,
  ) {
    this.session = this.playerSession.getSession();
  }

  ngOnInit(): void {
    if(!this.playerSession.isActive()) {
      this.playerSession.clearSession();
      this.router.navigateByUrl("/login");
    }
  }
}
