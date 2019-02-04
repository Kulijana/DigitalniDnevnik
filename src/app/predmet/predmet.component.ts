import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from "../predmet.service";
import { ActivatedRoute } from '@angular/router';
import { Razred } from '../razred';
import { RazredService } from '../razred.service';
import { RubrikaOcena } from '../rubrika-ocena';
import { RubrikaOcenaService } from '../rubrika-ocena.service';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  predmet: Predmet;
  razred: Razred;
  rubrikaOcena: RubrikaOcena;
  ucenik: string;
  prosek: number;
  ocena: number;
  constructor(
    private route: ActivatedRoute,
    private predmetService: PredmetService,
    private razredService: RazredService,
    private rubrikaOcenaService: RubrikaOcenaService
    ) { }

  ngOnInit() {
    this.getPredmet();
  }
  getPredmet(): void{
    const name = this.route.snapshot.paramMap.get('name');
    this.predmetService.getPredmet(name).
    subscribe(predmet => this.predmet = predmet);
    if(this.predmet.department.length !== 0){
      this.updateRazred(this.predmet.department[0]);
    }
  }
  updateRazred(name: string): void{
    this.razredService.getRazred(name).
    subscribe(razred => this.razred = razred);
    if(this.razred.students.length !== 0){
      this.updateRubrika(this.razred.students[0]);
    }
  }

  updateRubrika(student: string): void{
    this.ucenik = student;
    this.updateOcene(student, this.predmet.name);
  }

  updateOcene(student: string, subject: string): void{
    this.rubrikaOcenaService.getRubrika(student, subject)
      .subscribe(rubrika => this.rubrikaOcena = rubrika);

      if(this.rubrikaOcena){
        this.prosek = this.rubrikaOcena.grades.reduce((first, next) => first + next) / this.rubrikaOcena.grades.length;
        this.prosek = Math.round(this.prosek*100) / 100;
      }
  }
  addGrade(grade: number): void{
    if(grade > 5 || grade < 1)
      return;
    if(this.rubrikaOcena){
      this.rubrikaOcenaService.addOcena(this.rubrikaOcena.student, this.rubrikaOcena.subject, grade);
      this.updateRubrika(this.rubrikaOcena.student);
    }
    else{
     this.rubrikaOcenaService.createRubrika(this.ucenik, this.predmet.name, grade)
     .subscribe(rubrika => this.updateRubrika(rubrika.student));
    }
  }

}
