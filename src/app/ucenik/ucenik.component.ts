import { Component, OnInit } from '@angular/core';
import { RubrikaOcenaService } from '../rubrika-ocena.service';
import { RubrikaOcena } from '../rubrika-ocena';
import { UcenikService } from '../ucenik.service';
import { Ucenik } from '../ucenik';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  ucenik: Ucenik;
  rubrike: RubrikaOcena[];
  constructor(
    private ucenikService: UcenikService,
    private rubrikaOcenaService: RubrikaOcenaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUcenik();
  }

  getUcenik(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.ucenikService.getUcenik(id).subscribe((ucenik) => {
      this.ucenik = ucenik;
      this.getOcene(ucenik.name);
    });
  }

  getOcene(name: string): void{
    this.rubrikaOcenaService.getRubrikeForStudent(name).subscribe(rubrike => this.rubrike = rubrike);
  }

}
