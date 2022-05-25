import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnivPageComponent } from './univ-page/univ-page.component';
import { UnivFicheComponent } from './univ-page/univ-fiche/univ-fiche.component';
import { UnivCommentsComponent } from './univ-page/univ-comments/univ-comments.component';
import { CommentComponent } from './univ-page/univ-comments/comment/comment.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { GradesComponent } from './univ-page/univ-comments/grades/grades.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './admin-page/table/table.component';
import { CarteComponent } from './carte/carte.component';
import { AgmCoreModule } from '@agm/core';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    UnivPageComponent,
    UnivFicheComponent,
    UnivCommentsComponent,
    CommentComponent,
    GradesComponent,
    AdminPageComponent,
    TableComponent,
    CarteComponent,
    QuizComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWCQwDMwBBQBY1ulc-vP002B6anINsDrs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
