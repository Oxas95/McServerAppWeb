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
  navClass: Record<string, boolean> = {};

  constructor(
    private playerSessionService: PlayerSessionService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.session = this.playerSessionService.getSession();
    this.setNavClass()
  }

  onDisconnect() {
    this.playerSessionService.logout().subscribe();
    this.router.navigateByUrl("/login");
  }

  setNavClass() {
    this.navClass = {
      'menu-row': this.session?.access !== 4,
      'menu-column': this.session?.access === 4,
    }
  }
}
