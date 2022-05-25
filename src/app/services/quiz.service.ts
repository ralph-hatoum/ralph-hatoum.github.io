
import { Injectable } from '@angular/core'
import { Quiz } from 'src/app/models/quiz.model'

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Pour la température, tu es plutôt ...',
      answer: [
        { option: 'chaud', correct: true },
        { option: 'froid', correct: true }
      ]
    },
    {
      question: 'Niveau de vie ? -1 pour moins cher que la France, 0 pour niveau de vie équivalent à la France, 1 pour un pays plus cher que la France',
      answer: [
        { option: "-1", correct: true },
        { option: "0", correct: true },
        { option: "1", correct: true }
      ]
    },
    {
      question: 'Quelles langues parles-tu ?',
      answer: [
        { option: 'Anglais', correct: true },
        { option: 'Espagnol', correct: true },
        { option: 'Chinois', correct: true },
        { option: 'Japonais', correct: true },
        { option: 'Coréen', correct: true },
        { option: 'Portugais', correct: true },
        { option: 'Francais', correct: true },
        { option: 'Allemand', correct: true },
        { option: 'Danois', correct: true },
      ]
    },

    {
      question: 'Faut-il que ce soit obligatoirement LGBTQ+ Friendly?',
      answer: [
        { option: 'Oui', correct: true },
        { option: "Non", correct: true },
      ]
    }

  ]
  constructor() { }

  getQuizzes() {

    return this.quizzes;
  }
}

/*
Question a poser :

*/
