import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutComponent } from './components/aut/aut.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path:'', component: HomeComponent},
  {path:'', component: DashboardComponent},
  {path:'auth', component: AutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
