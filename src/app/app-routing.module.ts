import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { NastavnoLiceComponent } from './nastavno-lice/nastavno-lice.component';
import { PredmetComponent } from './predmet/predmet.component';
import { UcenikComponent } from './ucenik/ucenik.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'nastavnoLice/:id', component: NastavnoLiceComponent },
  { path: 'predmet/:name', component: PredmetComponent},
  { path: 'ucenik/:id', component: UcenikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
