import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO DE SERVICIOS

import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { BooleanSelectorService } from 'src/app/boolean-selector.service';

//FIN DE SERVICIOS

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeCompComponent } from './components/welcome-comp/welcome-comp.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserComponent } from './components/user/user.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/score/score.component';
import { LoginComponent } from './components/login/login.component';
import { PopupCourseComponent } from './components/popup-course/popup-course.component';

import { SequenceComponent } from './components/sequence/sequence.component';

import { TemplateComponent } from './components/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeCompComponent,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
    UserComponent,
    TutorialComponent,
    GameComponent,
    ScoreComponent,
    LoginComponent,

    PopupCourseComponent,
    SequenceComponent,

    TemplateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService,
    BooleanSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
