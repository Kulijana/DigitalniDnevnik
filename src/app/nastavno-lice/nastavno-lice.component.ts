import { Component, OnInit } from '@angular/core';
import { PredmetService } from "../predmet.service";
import { Predmet } from '../predmet';

@Component({
  selector: 'app-nastavno-lice',
  templateUrl: './nastavno-lice.component.html',
  styleUrls: ['./nastavno-lice.component.css']
})
export class NastavnoLiceComponent implements OnInit {

  predmeti: Predmet[];

  constructor(private predmetService: PredmetService) { }

  ngOnInit() {
    console.log("Getujemo predmete");
    this.getPredmeti();
    console.log("Getovali smo predmete");
    console.log(this.predmeti.length);
  }

  getPredmeti(): void{
    this.predmetService.getPredmeti()
      .subscribe(predmeti => this.predmeti = predmeti);
  }

}
