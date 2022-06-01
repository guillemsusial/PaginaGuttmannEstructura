import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './components/game/game.component';

import { LoginComponent } from './components/login/login.component';
import { SequenceComponent } from './components/sequence/sequence.component';

import { TemplateComponent } from './components/template/template.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { UserComponent } from './components/user/user.component';
import { WelcomeCompComponent } from './components/welcome-comp/welcome-comp.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [

  { path: 'home', component: WelcomeCompComponent },

  { path: 'game', component: TemplateComponent, canActivate: [AuthGuard] },
  { path: 'game/:game', component: TemplateComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'simon', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'simon/:game', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'sequence', component: SequenceComponent, canActivate: [AuthGuard] },

  { path: 'register', component: LoginComponent },
  { path: 'game/:game/:mode', component:  GameComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
