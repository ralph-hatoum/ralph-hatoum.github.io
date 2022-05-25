import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model'
import { homepage } from '../models/homepage.model';
import { Univ } from '../models/univ.model';
import { QuizService } from '../services/quiz.service';
import { UnivService } from '../services/univ.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationServiceService } from '../communication-service.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  univ_list!: Univ[]
  homepage_!: homepage;

  quizzes: Quiz[] = [];
  answer: string[][] = [[], [], [], []];
  univCorrect: Univ[] = [];
  univPourcent !: [string, number][]

  currentQuiz = 0;
  answerSelected = false;
  result = false;
  dispButton = false;

  vide: string = "vide";

  constructor(private quizService: QuizService, public homepageservice: UnivService, private router:Router, private communication: CommunicationServiceService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.homepageservice.getHomePage().subscribe((hp) => this.homepage_ = hp);

  }

  Validation() {

    this.currentQuiz += 1;
  }
  onAnswer(option: string) {

    if (this.answer[this.currentQuiz].find(elem => elem == option)) {
      this.answer[this.currentQuiz].splice(this.answer[this.currentQuiz].indexOf(option), 1);
    }
    else {
      this.answer[this.currentQuiz].push(option);
    }

    if (this.currentQuiz == this.quizzes.length) {
      this.dispButton = true;
    }


  }

  seeUniv(id: Univ): void {
    this.router.navigateByUrl('univ/'+id._id);
    this.communication.univ_id_to_fetch = id._id;
    console.log(id)
  }


  showResult() {
    this.result = true;
    // Faire une sous liste d'université remplissant les conditions du test
    this.homepage_.landing_page_array.forEach(univ => {

      var rempliCritere = true;

      if (!this.answer[0].some(temperature => temperature == univ.temperature)) {     //Si l'elem n'est pas dans la liste alors retourne faux
        rempliCritere = false;
        console.log(univ.temperature)
        console.log(univ.name, univ.temperature, " temperature n'est pas bon")
      }
      if (!this.answer[1].some(niVie => niVie == univ.cost)) {     //Si l'elem n'est pas dans la liste alors retourne faux
        rempliCritere = false;
        console.log(univ.name, univ.cost, "cost n'est pas bon")
      }
      if (!this.answer[2].some(langue => langue == univ.language)) {     //Si l'elem n'est pas dans la liste alors retourne faux
        rempliCritere = false;
        console.log(univ.name, univ.language, " langue n'est pas bon")
      }

      if (!this.answer[3].some(gay => gay == univ.LGBTQ_friendly)) {     //Si l'elem n'est pas dans la liste alors retourne faux
        rempliCritere = false;
        console.log(univ.name, univ.LGBTQ_friendly, " gay n'est pas bon")
      }


      if (rempliCritere) {
        this.univCorrect.push(univ);
        this.vide = "pas vide";
      }

    });

  }
}
