import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthErrorsService {

  private errors:Map<string, string> = new Map<string, string> ([
    ["TIMEOUT_LOGIN", "Authentification annulée"], //defini par l'api d'authentification minecraft
    ["Invalid_username", "Pseudonyme invalide"],   //defini par l'api d'authentification minecraft
    ["Service_unavailable", "Impossible d'accéder au service de vérification de la connexion"], //defini dans mc-auth.component.ts
    ["invalid", "Connexion invalide"], //defini dans le serveur spring boot distant
    ["error", "L'authentification a échoué"],   //defini dans le serveur spring boot distant
    //["", ""],
  ]);

  constructor() { }

  getErrorMessage(key: string) {
    return this.errors.get(key);
  }

  hasErrorKey(key: string) {
    return this.errors.has(key);
  }
}
