import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { CarteComponent } from "./carte/carte.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";
import { UnivPageComponent } from "./univ-page/univ-page.component";


const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'univ/:id', component: UnivPageComponent},
    {path:'admin', component: AdminPageComponent},
    {path:'carte', component : CarteComponent},
    {path : 'quizz', component : QuizComponent},
    {path : 'login', component : LoginComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class appRoutingModule{}
