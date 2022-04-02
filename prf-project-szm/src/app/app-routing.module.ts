import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomepageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
