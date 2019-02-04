import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from "../predmet.service";
import { ActivatedRoute } from '@angular/router';
import { Razred } from '../razred';
import { RazredService } from '../razred.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  predmet: Predmet;
  razred: Razred;
  constructor(
    private route: ActivatedRoute,
    private predmetService: PredmetService,
    private razredService: RazredService
    ) { }

  ngOnInit() {
    this.getPredmet();
  }
  getPredmet(): void{
    const name = this.route.snapshot.paramMap.get('name');
    this.predmetService.getPredmet(name).
    subscribe(predmet => this.predmet = predmet);
    if(this.predmet.department.length === 1){
      this.updateRazred(this.predmet.department[0]);
    }
  }
  updateRazred(name: string): void{
    this.razredService.getRazred(name).
    subscribe(razred => this.razred = razred);
  }
}
