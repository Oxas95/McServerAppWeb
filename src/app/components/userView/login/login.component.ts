import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerSessionService } from '../../../services/player-session/player-session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthErrorsService } from 'src/app/services/auth-errors/auth-errors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username: string = "";
  title= "Minecraft Server";
  error? : string;

  minecraftApiUrl = "https://api.minecraft.id/gateway/start/";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerSessionService: PlayerSessionService,
    private http: HttpClient,
    private authErrors: AuthErrorsService,
  ) { }

  ngOnInit(): void {
    this.getParameter();
  }

  getParameter() {
    var paramsObject : any;
    this.route.queryParamMap
      .subscribe((params) => {
        paramsObject = { ...params.keys, ...params };
      }
    );
    var re = / /gi;
    this.error = this.authErrors.getErrorMessage(paramsObject?.params?.error?.replace(re, "_"));
  }

  getCallback() {
    return (window.location.href.split("login"))[0] + "mc-auth";
  }

  onSubmit(form: any, e: any) {
    sessionStorage.setItem("username", this.username);
    e.target.submit();
  }
}
