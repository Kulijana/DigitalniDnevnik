import { Component, OnInit } from '@angular/core';
import { PredmetService } from "../predmet.service";
import { Predmet } from '../predmet';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nastavno-lice',
  templateUrl: './nastavno-lice.component.html',
  styleUrls: ['./nastavno-lice.component.css']
})
export class NastavnoLiceComponent implements OnInit {

  nastavnik: Nastavnik;
  predmeti: Predmet[];

  constructor(private predmetService: PredmetService,
    private nastavnikService: NastavnikService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPredmeti();
  }

  getNastavnik(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.nastavnikService.getNastavnik(id).subscribe((nastavnik) => {
      this.nastavnik = nastavnik;
      //this.getOcene(ucenik.name);
    });
  }
  getPredmeti(): void{
    this.predmetService.getPredmeti()
      .subscribe(predmeti => this.predmeti = predmeti);
  }

}
