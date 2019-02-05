import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const ucenici = [
      {id: 1, name: 'Nikola Gava', username: '6474', password: 'password'},
      {id: 2, name: 'Pera Perovic', username: 'pp2', password: 'password'},
      {id: 3, name: 'Branka Delic', username: 'bd', password: 'password'},
      {id: 4, name: 'Darko Popovic', username: 'darpop', password: 'password'},
      {id: 5, name: 'Marko Savic', username: 'msavic', password: 'password'},
      {id: 6, name: 'Mia Saric', username: 'msaric', password: 'password'}
    ];
    const nastavnici = [
      {id: 1, name: 'Petar Markovic', username: 'pMarkovic', password: 'password'},
      {id: 2, name: 'Luka Lazukic', username: 'itExpert', password: 'password'},
      {id: 3, name: 'Dusko Petkovic ', username: 'dPetkovic', password: 'password'},
    ];
    const predmeti = [
      {id: 1, name: 'Matematika', professor: 'Petar Markovic', studentNumber: 30, department: ['V-2']},
      {id: 2, name: 'Fizika', professor: 'Petar Markovic', studentNumber: 26, department: ['VI-3','V-4']},
      {id: 3, name: 'Informatika', professor: 'Petar Markovic',studentNumber: 28, department: ['V-2']}
    ];
    const razredi = [
      {id: 1, name: 'V-4', students: [ 'Nikola Gava', 'Pera Perovic'] },
      {id: 2, name: 'VI-3', students: [ 'Branka Delic', 'Darko Popovic' ] },
      {id: 3, name: 'V-2', students: [ 'Marko Savic', 'Mia Saric'] }
    ];
    const rubrikaOcena = [
      {id: 1, student: 'Nikola Gava', grades: [2,3,4,5], subject:'Matematika' },
      {id: 2, student: 'Nikola Gava', grades: [2,2,5], subject:'Fizika' },
      {id: 3, student: 'Nikola Gava', grades: [5,5], subject:'Informatika' },
      {id: 4, student: 'Branka Delic', grades: [4,4,5], subject:'Matematika' },
      {id: 5, student: 'Branka Delic', grades: [2,2,4], subject:'Fizika' },
      {id: 6, student: 'Branka Delic', grades: [2,3,1,2], subject:'Matematika' },
      {id: 7, student: 'Mia Saric', grades: [2,2], subject:'Informatika' },
      {id: 8, student: 'Marko Savic', grades: [2,1,1,1], subject:'Matematika' },
      {id: 9, student: 'Darko Popovic', grades: [2,3,4], subject:'Fizika' },
    ];

    return {ucenici, nastavnici, predmeti, razredi, rubrikaOcena};
  }
  constructor() { }
}
