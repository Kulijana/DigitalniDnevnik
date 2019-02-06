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
  profId: number;
  constructor(
    private route: ActivatedRoute,
    private predmetService: PredmetService,
    private razredService: RazredService,
    private rubrikaOcenaService: RubrikaOcenaService
    ) { }

  ngOnInit() {
    this.getPredmet();
    this.getProfId();
  }

  getProfId(): void{
    this.profId = +this.route.snapshot.paramMap.get('idProf');
  }
  getPredmet(): void{
    const id = +this.route.snapshot.paramMap.get('idPred');
    this.predmetService.getPredmet(id)
      .subscribe(predmet => {
        this.predmet = predmet;
        if(predmet.department.length !==0)
          this.updateRazred(predmet.department[0], predmet.name);
      });

  }

  updateRazred(name: string, subject: string): void{
    this.razredService.getRazredi().subscribe(
      razredi => {
        this.razred = razredi.find(razred => razred.name === name);
      }
    );
  }


  updateRubrika(name: string, subject: string): void{
    this.ucenik = name;
    this.rubrikaOcenaService.getRubrikeForStudent(name).subscribe( rubrike =>
    {
      this.rubrikaOcena = rubrike.find(rubrika => rubrika.subject === subject);
      if(rubrike.find(rubrika => rubrika.subject === subject))
        this.prosek = this.avg(rubrike.find(rubrika => rubrika.subject === subject).grades);
    }

    )
  }

  avg(numbers: number[]): number{
    return Math.round((numbers.reduce((first, next) => first + next) / numbers.length) * 100) /100;
  }

  updateRubrikaManual(name: string): void{
    this.updateRubrika(name, this.predmet.name);
  }
  
  addGrade(grade: number): void{
    if(grade > 5 || grade < 1)
      return;
    if(this.rubrikaOcena){
      this.rubrikaOcena.grades.push(+grade);
      this.rubrikaOcenaService.addOcena(this.rubrikaOcena).subscribe();
      this.updateRubrika(this.rubrikaOcena.student, this.predmet.name);
    }
    else{
      this.rubrikaOcena = {student: this.ucenik, subject: this.predmet.name, grades: [+grade], id:0}
     this.rubrikaOcenaService.createRubrika(this.rubrikaOcena)
     .subscribe(rubrika => this.updateRubrika(this.ucenik, this.predmet.name));
    }
  }

}
