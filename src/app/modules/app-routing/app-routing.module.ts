import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { ServerStatusComponent } from 'src/app/components/userView/server-status/server-status.component'; 
import { LoginComponent } from 'src/app/components/userView/login/login.component'; 
import { ServerManagerComponent } from 'src/app/components/adminView/server-manager/server-manager.component';
import { AccueilComponent } from 'src/app/components/userView/accueil/accueil.component'; 

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'manage', component: ServerManagerComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
