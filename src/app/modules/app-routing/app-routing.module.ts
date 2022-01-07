import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/components/userView/login/login.component'; 
import { TestComponent } from 'src/app/test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'test', component: TestComponent },
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
