import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McAuthComponent } from 'src/app/components/mc-auth/mc-auth.component';
import { LoginComponent } from 'src/app/components/userView/login/login.component'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'mc-auth', component: McAuthComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
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
