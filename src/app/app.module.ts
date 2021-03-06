import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ServerStatusComponent } from './components/userView/server-status/server-status.component';
import { LoginComponent } from './components/userView/login/login.component';
import { ServerManagerComponent } from './components/adminView/server-manager/server-manager.component';
import { LaunchServerComponent } from './components/adminView/launch-server/launch-server.component';
import { ConfigureServerComponent } from './components/adminView/configure-server/configure-server.component'; 
import { ManageAccessComponent } from './components/adminView/manage-access/manage-access.component';
import { CmdSenderComponent } from './components/adminView/cmd-sender/cmd-sender.component'; 
import { UserMenuComponent } from './components/userView/user-menu/user-menu.component'; 
import { AccueilComponent } from './components/userView/accueil/accueil.component'; 
import { PlayerStatusComponent } from './components/userView/player-status/player-status.component'; 
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { McAuthComponent } from './components/mc-auth/mc-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerStatusComponent,
    LoginComponent,
    ServerManagerComponent,
    LaunchServerComponent,
    ConfigureServerComponent,
    ManageAccessComponent,
    CmdSenderComponent,
    UserMenuComponent,
    AccueilComponent,
    PlayerStatusComponent,
    McAuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AuthRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
