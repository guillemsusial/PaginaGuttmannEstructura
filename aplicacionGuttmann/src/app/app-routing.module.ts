import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { GameComponent } from './components/game/game.component';
import { TemplateComponent } from './components/template/template.component';
import { WelcomeCompComponent } from './components/welcome-comp/welcome-comp.component';

const routes: Routes = [
  { path: 'home', component: WelcomeCompComponent},
  { path: 'game', component: TemplateComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }