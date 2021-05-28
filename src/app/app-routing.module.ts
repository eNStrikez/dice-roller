import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollerComponent } from './roller/roller.component';

const routes: Routes = [
    {path: '', redirectTo: '/roll', pathMatch: 'full'},
    {path: 'roll', component: RollerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
