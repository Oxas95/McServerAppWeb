import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerSessionService } from './services/player-session/player-session.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'McServerAppWeb';

  constructor(
    private router: Router,
    private playerSession: PlayerSessionService
  ) {
    alert(( !playerSession.isActive() ? "/login" : "/accueil" ));
    router.navigateByUrl( ( !playerSession.isActive() ? "/login" : "/accueil" ) )
  }

  ngOnInit() {
    alert("init");
  }

}
