import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdSenderComponent } from 'src/app/components/adminView/cmd-sender/cmd-sender.component';
import { ConfigureServerComponent } from 'src/app/components/adminView/configure-server/configure-server.component';
import { LaunchServerComponent } from 'src/app/components/adminView/launch-server/launch-server.component';
import { ManageAccessComponent } from 'src/app/components/adminView/manage-access/manage-access.component';
import { ServerManagerComponent } from 'src/app/components/adminView/server-manager/server-manager.component';
import { AdminGuard } from 'src/app/guard/admin/admin.guard';
import { AuthGuard } from 'src/app/guard/auth/auth.guard';

const routes: Routes = [
  { 
    path: 'manage',
    component: ServerManagerComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { 
        path: '', //component-less route
        children: [
          { path: 'launch', component: LaunchServerComponent },
          { path: 'configure', component: ConfigureServerComponent },
          { path: 'access', component: ManageAccessComponent },
          { path: 'rcon', component: CmdSenderComponent},
          { path: '', redirectTo: 'launch', pathMatch: 'full'}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
