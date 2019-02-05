import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UcenikService } from '../ucenik.service';
import { NastavnikService } from '../nastavnik.service';
import { Nastavnik } from '../nastavnik';
import { Ucenik } from '../ucenik';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  private nastavnici: Nastavnik[];
  private ucenici: Ucenik[];
  constructor(
    private router: Router,
    private ucenikService: UcenikService,
    private nastavnikService: NastavnikService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void{
    this.ucenikService.getUcenici().subscribe(ucenici => this.ucenici = ucenici);
    this.nastavnikService.getNastavnici().subscribe(nastavnici => this.nastavnici = nastavnici);
  }

  login(): void{
    var korisnik;
    korisnik = this.ucenici.find((ucenik) => ucenik.username === this.username && ucenik.password === this.password);
    if(korisnik){
      this.router.navigateByUrl(`/ucenik/${korisnik.id}`);
      return;
    }
    korisnik = this.nastavnici.find((nastavnik) => nastavnik.username === this.username && nastavnik.password === this.password);
    if(korisnik){
      this.router.navigateByUrl(`/nastavnoLice/${korisnik.id}`);
      return;
    }
    // const id = this.ucenikService.validUcenik(this.username, this.password);
    // console.log("id1: " + id);
    // if(id !==0){
    //   this.router.navigateByUrl(`/ucenik/${id}`);
    //   return;
    // }
    // this.nastavnikService.validNastavnik(this.username, this.password).subscribe(id2 =>     console.log("id2: " +id2));

    // if(id2 !== 0){
    //   console.log(id2);
    //   this.router.navigateByUrl(`/nastavnik/${id2}`);
    //   return;
    // }
  }

}
