import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerSession } from 'src/app/interfaces/player-session';
import { AuthErrorsService } from 'src/app/services/auth-errors/auth-errors.service';
import { PlayerSessionService } from 'src/app/services/player-session/player-session.service';

@Component({
  selector: 'app-mc-auth',
  templateUrl: './mc-auth.component.html',
  styleUrls: ['./mc-auth.component.css']
})
export class McAuthComponent implements OnInit {

  paramsObject: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerSessionService: PlayerSessionService,
    private authErrors: AuthErrorsService,
    ) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.checkAuthentication();
  }

  getParamsFromUrl () {
    this.route.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
      }
    );
  }

  checkAuthentication() {
    let username = sessionStorage.getItem("username");
    sessionStorage.clear();
    if (this.paramsObject.params.mcauth_success === "true" 
    && this.paramsObject.params.mcauth_status === "VERIFIED"
    && username) {
      this.playerSessionService.login(username, this.paramsObject.params.mcauth_code)
      this.playerSessionService.checkAuthentication()
        .subscribe(e => {
          if(e) { //reponse recu
            var playerSession = e as PlayerSession
            if(this.authErrors.hasErrorKey(playerSession.token)) { //le token contient l'erreur
              this.router.navigateByUrl(`/login?error=${playerSession.token}`);
            } else { //connexion reussi
              this.router.navigateByUrl("/accueil");
            }
          }
          else { //pas de reponse
            this.playerSessionService.logout();
            this.router.navigateByUrl("/login?error=Service_unavailable");
          }
        });
    } else {
      this.router.navigateByUrl("/login?error=" + this.paramsObject.params.mcauth_msg)
    }
  }

}
