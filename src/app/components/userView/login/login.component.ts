import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerSession } from '../../../interfaces/player-session';
import { PlayerSessionService } from '../../../services/player-session/player-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pseudo: string = "";

  constructor(
    private router: Router,
    private playerSession: PlayerSessionService,
  ) {
    if (this.playerSession.isActive()) {
      router.navigateByUrl("/accueil");
    }
  }

  ngOnInit(): void {}

  onValid() {
    this.playerSession.setSession( { pseudo: this.pseudo, token: "token !", access: 0 } );
    this.router.navigateByUrl("/");
  }

}
