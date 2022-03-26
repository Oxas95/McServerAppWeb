import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { PlayerSession } from 'src/app/interfaces/player-session';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerSessionService {

  apiUrl = "http://192.168.1.31:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'

    }),
  };

  playerSession: PlayerSession;

  constructor(
    private http: HttpClient,) {
      this.playerSession = this.getEmptyPlayerSession();
  }

  private getAccessLevel(access: string): number {
    switch(access) {
      case "BANNED" : return 0;
      case "INITIAL": return 1;
      case "ASKED"  : return 2;
      case "ALLOWED": return 3;
      case "ADMIN"  : return 4;
      default       : return -1;
    }
  }

  login(username: string, token: string) {
    //not yet implemented
    this.playerSession = { //simulate login
      username: username,
      token: token,
      access: 1,
    };
  }

  getSession(): PlayerSession  {
    return this.playerSession;
  }

  logout() {
    return this.http.post<PlayerSession>(this.apiUrl + "/player/disconnect", this.playerSession, this.httpOptions)
    .pipe(
      tap(() => this.playerSession = this.getEmptyPlayerSession()),
      catchError(this.handleError<PlayerSession>(`Disconnect ${this.playerSession.username}`))
    );
  }

  private getEmptyPlayerSession(): PlayerSession {
    return {
      username: "",
      token: "",
      access: undefined
    };
  }

  isActive(): boolean {
    this.isValid().subscribe();
    return this.playerSession.username != "" 
      && this.playerSession.token != ""
      && this.playerSession.access != undefined;
  }

  isValid() {
    return this.http.post<PlayerSession>(this.apiUrl + "/player/check", this.playerSession, this.httpOptions)
    .pipe(
      tap(response => console.log("Connection is valid")),
      catchError(this.handleError<PlayerSession>(`Check authentication informations of ${this.playerSession.username}`))
    );
    
  }

  checkAuthentication(){
    return this.http.post<string>(this.apiUrl + "/player/auth", this.playerSession, this.httpOptions)
    .pipe(
      tap((authenticatedPlayer: any) => {
        this.playerSession.token = authenticatedPlayer.token;
        this.playerSession.access = this.getAccessLevel(authenticatedPlayer.access);
      }),
      catchError(this.handleError<PlayerSession>(`Authenticate ${this.playerSession.username}`))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
