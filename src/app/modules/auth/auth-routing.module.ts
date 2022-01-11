import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/app/components/userView/accueil/accueil.component';
import { AuthGuard } from 'src/app/guard/auth/auth.guard';

const routes: Routes = [
  { 
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
