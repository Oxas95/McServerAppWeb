import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerSession } from 'src/app/interfaces/player-session';
import { PlayerSessionService } from 'src/app/services/player-session/player-session.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  session?: PlayerSession;

  constructor(
    private playerSessionService: PlayerSessionService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.session = this.playerSessionService.getSession();
  }

  disconnect() {
    this.router.navigateByUrl("/login");
  }
}
