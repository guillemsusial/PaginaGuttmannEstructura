import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { UserComponent } from './components/user/user.component';
import { WelcomeCompComponent } from './components/welcome-comp/welcome-comp.component';

const routes: Routes = [
  { path: 'home', component: WelcomeCompComponent},
  { path: 'game', component: TemplateComponent},
  { path: 'user', component: UserComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }