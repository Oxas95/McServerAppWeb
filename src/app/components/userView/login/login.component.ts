import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerSession } from '../../../interfaces/player-session';
import { PlayerSessionService } from '../../../services/player-session/player-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() pseudo: string = "";

  title= "Minecraft Server"

  constructor(
    private router: Router,
    private playerSessionService: PlayerSessionService,
  ) { }

  ngOnInit(): void {
  }

  onValid() {
    this.playerSessionService.login(this.pseudo);
    let session = this.playerSessionService.getSession();
    //alert(`${this.pseudo}, ${session.token} ${session.access}`);
    this.router.navigateByUrl("/accueil");
  }

}
